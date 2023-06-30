import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection, IData } from "../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import { useNavigate } from "react-router-dom";

export default function useDeleteCollection(
	id: string | undefined | null,
	post: boolean,
  setPost: (value: boolean) => void,
) {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [load, setLoad] = useState<boolean>(true);

  const navigate = useNavigate();
	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();

	const putInfo = useCallback(
		async (
			accessToken: string,
			id: string,
		) => {
			try {
				setDataCollection(
					await (
						await axios.delete(
							`https://api.unsplash.com/collections/${id}?access_token=${accessToken}`,
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
		if (post && accessToken && id) {
      setPost(false)
			putInfo(accessToken, id);
			navigate(`/`);
		} else {
			if (post) {
        setPost(false)
				addError(dispatch, `Something went wrong. Try again`);
			}
		}
	}, [accessToken, dispatch, id, post]);

	return {
		dataCollection,
		load,
	};
}