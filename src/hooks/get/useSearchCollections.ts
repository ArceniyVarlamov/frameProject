import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	IAccountCollection,
	IAccountPublicData,
	ISearchCollections,
	ISearchFrames,
} from "../../interface";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import useFramesStoreInfo from "../../utils/info/useFramesStoreInfo";
import {
	resetFramesLoaded,
	resetFramesRedirect,
} from "../../store/framesSlice";

export default function useSearchCollections(options: {
	perLoad: number;
	page: number;
	q: string | undefined | null;
	post: boolean;
}) {
	const { accessToken } = useAccountStoreInfo();

	const [collections, setCollections] = useState<ISearchCollections>({
		results: [],
		total: 100,
		total_pages: 100,
	} as ISearchCollections);
	const [load, setLoad] = useState<boolean>(false);

	const dispatch = useDispatch();

	const getCollectionsInfo = useCallback(
		async (page: number, accessToken: string, q: string, perLoad: number) => {
			try {
				// const data = (await (
				// 	await axios.get(
				// 		`https://api.unsplash.com/search/collections?access_token=${accessToken}&page=${page}&per_page=${perLoad}&query=${q}`,
				// 	)
				// ).data) as ISearchCollections;
				// setCollections({
				// 	...data,
				// 	results: [...collections.results, ...data.results],
				// });
				// Вариант если api ограничивает запросы
				let data: IAccountCollection[] = [];
				for (let i = collections.results.length; i < page * perLoad; i++) {
					data.push({
						height: Math.random() * (6000 - 4000) + 4000,
						cover_photo: {
							color: `rgba(${Math.random() * 125}, ${Math.random() * 125}, ${
								Math.random() * 125
							}, ${Math.random() + 0.2})`,
							blur_hash: "LB84i6~q-;t7ofRjM{fQxuofayWB",
						},
						total_photos: Math.floor(Math.random() * 8000),
						id: page * i,
						private: Math.random() >= 0.5 ? true : false,
					} as unknown as IAccountCollection);
				}
				setCollections({
					...collections,
					results: [...collections.results, ...data],
				});
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
			// !!accessToken &&
			!!options?.post &&
			!!options?.q &&
			!!options?.page
		) {
			getCollectionsInfo(
				options?.page,
				accessToken,
				options?.q,
				options?.perLoad,
			);
		}
	}, [
		accessToken,
		options?.page,
		options?.q,
		options?.perLoad,
		options?.post,
		getCollectionsInfo,
	]);

	return { collections, load };
}
