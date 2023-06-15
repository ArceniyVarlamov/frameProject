import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import useAccountInfo from "../../utils/info/useAccountInfo";
import { IAccountCollection, IData } from "./../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";

export default function useAccountCollection(id: string = "") {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [dataCollectionPhotos, setDataCollectionPhotos] = useState<IData[]>();
	const [loadCollection, setLoadCollection] = useState<boolean>(false);

	const { accessToken } = useAccountInfo();

	const dispatch = useDispatch();

	const getInfo = useCallback(
		async (accessToken: string) => {
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
			} catch (err: AxiosError | any) {
				addError(dispatch, `${err.message} occurred while getting collection data`)
			} finally {
				setLoadCollection(false);
			}
		},
		[id],
	);

	useEffect(() => {
		if (typeof accessToken === "string" && typeof id === 'string') {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo, id]);

	return {
		dataCollection,
		dataCollectionPhotos,
		loadCollection,
	};
}
