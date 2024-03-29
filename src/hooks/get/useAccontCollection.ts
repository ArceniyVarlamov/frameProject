import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection, IData } from "./../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import useFunctionsStoreInfo from './../../utils/info/useFunctionsStoreInfo';

export default function useAccountCollection(id: string | undefined | null) {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [load, setLoad] = useState<boolean>(false);

	const { accessToken } = useAccountStoreInfo();
	const { updateCollectionData } = useFunctionsStoreInfo()

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
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting collection data`)
			} finally {
				setLoad(false);
			}
		},
		[],
	);

	useEffect(() => {
		console.log(!!accessToken && !!id);
		
		if (!!accessToken && !!id) {
			getInfo(accessToken, id);
		}
	}, [accessToken, getInfo, id, updateCollectionData]);

	return {
		dataCollection,
		load,
	};
}
