import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection, IData } from "../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import { useNavigate } from "react-router-dom";

export default function useCreateCollection(
	name: string | undefined,
	description: string | undefined,
	privateC: boolean,
	post: boolean,
	setPost: (value: boolean) => void,
) {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [load, setLoad] = useState<boolean>(false);

	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const postInfo = useCallback(
		async (
			accessToken: string,
			name: string,
			description = "",
			privateC = false,
		) => {
			try {
				setDataCollection(
					await (
						await axios.post(
							`https://api.unsplash.com/collections?access_token=${accessToken}&title=${name}&description=${description}&private=${privateC}`,
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
		if (!!post && !!accessToken && !!name) {
			setPost(false)
			postInfo(accessToken, name, description, privateC);
		} else {
			if (!!post) {
				setPost(false)
				addError(dispatch, `Something went wrong. Try again`);
			}
		}
	}, [accessToken, description, dispatch, name, post, postInfo, privateC, setPost]);

	useEffect(() => {
    if (!!dataCollection) {
      navigate(`/collection/${dataCollection?.id}`);
    }
  }, [dataCollection]);

	return {
		dataCollection,
		load,
	};
}
