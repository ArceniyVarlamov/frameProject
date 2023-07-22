import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	IAccountCollection,
	IAccountPublicData,
	ISearchCollections,
	ISearchFrames,
  ISearchUsers,
} from "../../interface";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import useFramesStoreInfo from "../../utils/info/useFramesStoreInfo";

export default function useSearchUsers(options: {
	perLoad: number;
	page: number;
	q: string | undefined | null;
	post: boolean;
}) {
	const { accessToken } = useAccountStoreInfo();
  
	const [users, setUsers] = useState<ISearchUsers>({
		results: [],
		total: 100,
		total_pages: 100,
	} as ISearchUsers);
	const [load, setLoad] = useState<boolean>(false);

	const dispatch = useDispatch();

	const getUsersInfo = useCallback(
		async (page: number, accessToken: string, q: string, perLoad: number) => {
			try {
				const data = (await (
					await axios.get(
						`https://api.unsplash.com/search/users?access_token=${accessToken}&page=${page}&per_page=${perLoad}&query=${q}`,
					)
				).data) as ISearchUsers;
				setUsers({
					...data,
					results: [...users.results, ...data.results],
				});
				// Вариант если api ограничивает запросы
				// let data: IAccountPublicData[] = [];
				// for (let i = users.results.length; i < page * perLoad; i++) {
				// 	data.push({
				// 		name: 'numb',
				// 	} as unknown as IAccountPublicData);
				// }
				// setUsers({
				// 	...users,
				// 	results: [...users.results, ...data],
				// });
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting account data`);
			} finally {
				setLoad(false);
			}
		},
		[options?.page, options?.perLoad],
	);

	useEffect(() => {
		if (
			!!accessToken &&
			!!options?.post &&
			!!options?.q &&
			!!options?.page
		) {
			getUsersInfo(
				options?.page,
				accessToken,
				options?.q,
				options?.perLoad,
			);
		}
	}, [accessToken, options?.page, options?.q, options?.perLoad, options?.post, getUsersInfo]);

	return { users, load };
}
