import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import useMetaData from "../info/useMetaData";
import { IUnsplashUser } from "../../interface";
import { useDispatch } from "react-redux";
import { setAccessToken, setIsRegistered } from "../../store/accountSlice";
export default function useRegisterUnsplash(code?: string | null) {
	const dispatch = useDispatch();

	const [accountData, setAccountData] = useState<IUnsplashUser>(
		{} as IUnsplashUser,
	);
	const [accountError, setAccountError] = useState<string>("");
	const [accountLoading, setAccountLoading] = useState(true);

	const { unsplash, app } = useMetaData();

	const postRegisterUnsplash = useCallback(async (code: string) => {
		try {
			setAccountData(
				await (
					await axios.post(
						`https://unsplash.com/oauth/token?client_id=${unsplash.ACCESS_KEY}&client_secret=${unsplash.SECRET_KEY}&redirect_uri=${app.URL}&grant_type=authorization_code&code=${code}`,
					)
				).data,
			);
			localStorage.setItem("refresh_token", accountData.refresh_token);
			dispatch(setAccessToken(accountData.access_token));
			dispatch(setIsRegistered(true));
		} catch (err: AxiosError | any) {
			setAccountError(err);
		} finally {
			setAccountLoading(false);
		}
	}, []);

	const postRefreshUnsplash = useCallback(async () => {
		try {
			setAccountData(
				await (
					await axios.post(
						`https://unsplash.com/oauth/token?client_id=${unsplash.ACCESS_KEY}&client_secret=${unsplash.SECRET_KEY}&redirect_uri=${app.URL}&grant_type=refresh_token&refresh_token=${localStorage.getItem("refresh_token")}`,
					)
				).data,
			);
			localStorage.setItem("refresh_token", accountData.refresh_token);
			dispatch(setAccessToken(accountData.access_token));
			dispatch(setIsRegistered(true));
		} catch (err: AxiosError | any) {
			setAccountError(err);
		} finally {
			setAccountLoading(false);
		}
	}, []);

	useEffect(() => {
		if (!localStorage.getItem("refresh_token")) {
			console.log(localStorage.getItem("refresh_token"),'asfasfasfasf');
			
			postRefreshUnsplash();
		} else if (code) {
			console.log(code, 'wetweyweyweywy');
			
			postRegisterUnsplash(code);
		}
	}, [code]);

	useEffect(() => {
		if (accountData) {
			console.log(accountData);
		}
	}, [accountData]);

	return { accountData, accountError, accountLoading };
}
