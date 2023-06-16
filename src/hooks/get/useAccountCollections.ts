import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection } from "./../../interface";
import { addError } from "../../store/functionsSlice";
import { useDispatch } from "react-redux";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function useAccountCollections(
	username: string | null | undefined,
) {
	const [data, setData] = useState<IAccountCollection[]>();
	const [load, setLoad] = useState(false);

	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();

	const getInfo = useCallback(async () => {
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/users/${username}/collections?access_token=${accessToken}`,
					)
				).data,
			);
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting collections data`)
		} finally {
			setLoad(false);
		}
	}, [accessToken, dispatch, username]);

	useEffect(() => {
		if (typeof accessToken === "string" && typeof username === "string") {
			getInfo();
		}
	}, [accessToken, getInfo, username]);

	return { data, load };
}
