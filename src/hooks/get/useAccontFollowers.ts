import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";

export default function useAccountFollowers(username: string | null | undefined) {
	const [data, setData] = useState<IAccountPublicData[]>();
	const [load, setLoad] = useState(false);

	const { accessToken } = useAccountInfo();

	const dispatch = useDispatch()

	const getInfo = useCallback(async (accessToken: string, username: string) => {
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/users/${username}/followers?access_token=${accessToken}`,
					)
				).data,
			);
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting followers data`)
		} finally {
			setLoad(false);
		}
	}, [username]);

	useEffect(() => {
		if (!!accessToken && !!username) {
			getInfo(accessToken, username);
		}
	}, [accessToken, getInfo, username]);

	return { data, load };
}
