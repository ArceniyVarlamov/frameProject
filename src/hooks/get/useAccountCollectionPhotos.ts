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
	id: string | undefined | null,
  num: number,
) {
	const [dataCollectionPhotos, setDataCollectionPhotos] = useState<IData[]>([]);
	const [loadPhotos, setLoadPhotos] = useState<boolean>(false);

  const { framesLoaded, framesRedirect } = useFramesStoreInfo()

	const { accessToken } = useAccountStoreInfo();
	const { updateCollectionData } = useFunctionsStoreInfo()

	const dispatch = useDispatch();

  useEffect(() => {
		if (framesRedirect) {
			window.scrollTo(0, 0)
			dispatch(resetFramesLoaded())
			dispatch(resetFramesRedirect())
			setDataCollectionPhotos(dataCollectionPhotos.slice(dataCollectionPhotos.length - framesLoaded * num))
		}
	}, [framesRedirect]);

	const getInfo = useCallback(async (accessToken: string, id: string) => {
		try {
			setDataCollectionPhotos([
				...dataCollectionPhotos,
				...(await (
					await axios.get(
						`https://api.unsplash.com/collections/${id}/photos?access_token=${accessToken}&per_page=${num}&page=${framesLoaded}`,
					)
				).data),
			]);
      
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting collection data`);
			let all: IData[] = [];
			for (let i = dataCollectionPhotos.length; i < framesLoaded * num; i++) {
				all.push({height: Math.random() * (5000 - 2000) + 2000} as IData);
			}
      setDataCollectionPhotos([...dataCollectionPhotos, ...all]);
		} finally {
			setLoadPhotos(false);
		}
	}, [framesLoaded]);

	useEffect(() => {
		if (!!accessToken && !!id) {
			getInfo(accessToken, id);
		}
	}, [accessToken, getInfo, id, framesLoaded, updateCollectionData]);

	return {
		dataCollectionPhotos,
		loadPhotos,
	};
}

