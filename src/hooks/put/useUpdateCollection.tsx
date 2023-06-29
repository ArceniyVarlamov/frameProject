import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection, IData } from "../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function useUpdateCollection(
  id: string | undefined | null,
	name: string | undefined,
	description: string | undefined,
	privateC: boolean,
	post: boolean,
) {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [load, setLoad] = useState<boolean>(false);

	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();

	const getInfo = useCallback(
		async (
			accessToken: string,
      id: string,
			name: string,
			description="",
			privateC=false,
		) => {
			try {
				setDataCollection(
					await (
						await axios.put(
							`https://api.unsplash.com/collections/${id}?access_token=${accessToken}&title=${name}&description=${description}&private=${privateC}`,
						)
					).data,
				);
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting collection data`);
			} finally {
				setLoad(false);
			}
		},
		[],
	);

	useEffect(() => {
		if (post) {
			if (
				accessToken &&
				name &&
        id
			) {
				getInfo(accessToken, id, name, description, privateC);
			} else {
				addError(dispatch, `Something went wrong. Try again`);
			}
		}
	}, [accessToken, description, dispatch, getInfo, id, name, post, privateC]);

	return {
		dataCollection,
		load,
	};
}
