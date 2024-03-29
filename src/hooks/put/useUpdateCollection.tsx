import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection } from "../../interface";
import { useDispatch } from "react-redux";
import { addError, incUpdateCollectionData } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import { useNavigate } from "react-router-dom";

export default function useUpdateCollection(
	id: string | undefined | null,
	name: string | undefined,
	description: string | undefined,
	privateC: boolean,
	post: boolean,
	setPost: (value: boolean) => void,
) {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [load, setLoad] = useState<boolean>(true);
	
	const { accessToken } = useAccountStoreInfo();
	
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const putInfo = useCallback(
		async (
			accessToken: string,
			id: string,
			name: string,
			description = "",
			privateC = false,
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
		if (!!post && !!accessToken && !!name && !!id) {
			putInfo(accessToken, id, name, description, privateC);
			setPost(false)
			dispatch(incUpdateCollectionData())
		} else {
			if (!!post) {
				setPost(false)
				addError(dispatch, `Something went wrong. Try again`);
			}
		}
	}, [accessToken, description, dispatch, id, name, post, privateC, putInfo, setPost]);

	return {
		dataCollection,
		load,
	};
}
