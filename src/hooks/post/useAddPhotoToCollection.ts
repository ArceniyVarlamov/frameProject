import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection, IData } from "../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import { useNavigate } from "react-router-dom";

export default function useAddPhotoToCollections(
	collectionId: string | null | undefined,
	photoId: string | null | undefined,
	post: boolean,
	setPost: (value: boolean) => void,
) {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [load, setLoad] = useState<boolean>(false);

	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const postInfo = useCallback(
		async (accessToken: string, photoId: string, collectionId: string) => {
			try {
				setDataCollection(
					await (
						await axios.post(
							`https://api.unsplash.com/collections/${collectionId}/add?access_token=${accessToken}&photo_id=${photoId}`,
						)
					).data,
				);
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while adding photo to collection`);
			} finally {
				setLoad(false);
			}
		},
		[],
	);

	useEffect(() => {
		if (!!post && !!accessToken && !!photoId && !!collectionId) {
			setPost(false);
			postInfo(accessToken, photoId, collectionId);
		}
	}, [accessToken, collectionId, dispatch, photoId, post, postInfo, setPost]);

	return {
		dataCollection,
		load,
	};
}
