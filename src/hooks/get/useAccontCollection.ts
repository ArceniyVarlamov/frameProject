import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import useAccountInfo from "../../utils/info/useAccountInfo";
import { IAccountCollection, IData } from "./../../interface";

export default function useAccountCollection(id: string | null = "") {
	const [dataCollection, setDataCollection] = useState(
		{} as IAccountCollection,
	);
	const [dataCollectionPhotos, setDataCollectionPhotos] = useState(
		[] as IData[],
	);
	const [errorCollection, setErrorCollection] = useState(
		"" as AxiosError | any,
	);
	const [loadCollection, setLoadCollection] = useState<boolean>(false);
	const { accessToken } = useAccountInfo();
	const getInfo = useCallback(
		async (accessToken: string) => {
			try {
				setDataCollection(
					await (
						await axios.get(`https://api.unsplash.com/collections/${id}`)
					).data,
				);
				setDataCollectionPhotos(
					await (
						await axios.get(`https://api.unsplash.com/collections/${id}/photos`)
					).data,
				);
			} catch (err: AxiosError | any) {
				setErrorCollection(err.message);
			} finally {
				setLoadCollection(false);
			}
		},
		[id],
	);

	useEffect(() => {
		if (typeof accessToken === "string") {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo]);

	useEffect(() => {
		console.log(
			dataCollection,
			dataCollectionPhotos,
			errorCollection,
			loadCollection,
		);
	}, [dataCollection, dataCollectionPhotos, errorCollection, loadCollection]);

	return {
		dataCollection,
		dataCollectionPhotos,
		errorCollection,
		loadCollection,
	};
}
