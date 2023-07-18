import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection, IData } from "../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import { resetFramesLoaded, resetFramesRedirect } from "../../store/framesSlice";
import useFramesStoreInfo from "../../utils/info/useFramesStoreInfo";
import useFunctionsStoreInfo from "../../utils/info/useFunctionsStoreInfo";

export default function useAccountCollectionPhotos(
	page: number,
	id: string | undefined | null,
  perLoad: number,
) {
	const [dataCollectionPhotos, setDataCollectionPhotos] = useState<IData[]>([]);
	const [loadPhotos, setLoadPhotos] = useState<boolean>(false);

	const { accessToken } = useAccountStoreInfo();
	const { updateCollectionData } = useFunctionsStoreInfo()

	const dispatch = useDispatch();

	const getInfo = useCallback(async (accessToken: string, id: string) => {
		try {
			setDataCollectionPhotos([
				...dataCollectionPhotos,
				...(await (
					await axios.get(
						`https://api.unsplash.com/collections/${id}/photos?access_token=${accessToken}&per_page=${perLoad}&page=${page}`,
					)
				).data),
			]);
      
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting collection data`);
			let all: IData[] = [];
			for (let i = dataCollectionPhotos.length; i < page * perLoad; i++) {
				all.push({height: Math.random() * (5000 - 2000) + 2000} as IData);
			}
      setDataCollectionPhotos([...dataCollectionPhotos, ...all]);
		} finally {
			setLoadPhotos(false);
		}
	}, [page]);

	useEffect(() => {
		if (!!accessToken && !!id) {
			getInfo(accessToken, id);
		}
	}, [accessToken, getInfo, id, page, updateCollectionData]);

	return {
		dataCollectionPhotos,
		loadPhotos,
	};
}

