import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection, IData } from "../../interface";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function useCreateCollection(
	name: string | undefined,
	description: string | undefined,
	privateC: boolean,
	post: boolean,
) {
	const [dataCollection, setDataCollection] = useState<IAccountCollection>();
	const [load, setLoad] = useState<boolean>(false);

	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();

	const getInfo = useCallback(
		async (
			accessToken: string,
			name: string,
			description="",
			privateC=false,
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
		console.log(
				post,
		);
		if (post) {
			if (
				accessToken &&
				name
			) {
				getInfo(accessToken, name, description, privateC);
			} else {
				addError(dispatch, `Something went wrong. Try again`);
			}
		}
	}, [accessToken, description, dispatch, getInfo, name, post, privateC]);

	return {
		dataCollection,
		load,
	};
}
