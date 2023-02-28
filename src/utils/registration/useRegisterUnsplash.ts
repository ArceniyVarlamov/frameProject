import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import useMetaData from "../info/useMetaData";
import { IUnsplashUser } from "../../interface";
import { useDispatch } from "react-redux";
import { setAccessToken, setIsRegistered } from "../../store/accountSlice";
export default function useRegisterUnsplash(code?: string | null) {
	const dispatch = useDispatch();

	const [accountData, setAccountData] = useState({} as IUnsplashUser);
	const [accountError, setAccountError] = useState<string>(
		"" as AxiosError | any,
	);
	const [accountLoading, setAccountLoading] = useState(true);

	const { unsplash, app } = useMetaData();

	const postRegisterUnsplash = useCallback(async (code: string) => {
		try {
			setAccountData(
				await (
					await axios.post(
						`https://unsplash.com/oauth/token?client_id=${
							unsplash.ACCESS_KEY
						}&client_secret=${unsplash.SECRET_KEY}&redirect_uri=${
							app.URL + "/registered"
						}&grant_type=${"authorization_code"}&code=${code}`,
					)
				).data,
			);
		} catch (err: AxiosError | any) {
			setAccountError(err);
		} finally {
			setAccountLoading(false);
		}
	}, [app.URL, unsplash.ACCESS_KEY, unsplash.SECRET_KEY]);

	useEffect(() => {
		if (code) {
			postRegisterUnsplash(code);
		}
	}, [code, postRegisterUnsplash]);

	useEffect(() => {
		console.log(accountData);
		if (accountData.access_token) {
			localStorage.setItem("refresh_token", accountData.refresh_token);
			dispatch(setAccessToken(accountData.access_token));
			dispatch(setIsRegistered(true));
		}
	}, [accountData, dispatch]);

	return { accountData, accountError, accountLoading };
}
