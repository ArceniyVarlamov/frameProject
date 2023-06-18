import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection, IData } from "./../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function useAccountCollection(id: string | undefined | null) {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [dataCollectionPhotos, setDataCollectionPhotos] = useState<IData[]>();
	const [loadCollection, setLoadCollection] = useState<boolean>(false);

	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();

	const getInfo = useCallback(
		async (accessToken: string, id: string) => {
			try {
				setDataCollection(
					await (
						await axios.get(
							`https://api.unsplash.com/collections/${id}?access_token=${accessToken}`,
						)
					).data,
				);
				setDataCollectionPhotos(
					await (
						await axios.get(
							`https://api.unsplash.com/collections/${id}/photos?access_token=${accessToken}`,
						)
					).data,
				);
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting collection data`)
			} finally {
				setLoadCollection(false);
			}
		},
		[],
	);

	useEffect(() => {
		if (typeof accessToken === "string" && typeof id === 'string') {
			getInfo(accessToken, id);
		}
	}, [accessToken, getInfo, id]);

	return {
		dataCollection,
		dataCollectionPhotos,
		loadCollection,
	};
}
