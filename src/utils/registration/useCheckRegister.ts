import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IUnsplashUser } from "../../interface";
import { setAccessToken, setIsRegistered } from "../../store/accountSlice";
import useMetaData from "../info/useMetaData";
import useAccountInfo from "../info/useAccountInfo";

export default function useCheckRegister() {
	const dispatch = useDispatch();

	const { isRegistered, registeredWith, accessToken } = useAccountInfo();
	const [accountData, setAccountData] = useState({} as IUnsplashUser);
	const [accountError, setAccountError] = useState("" as AxiosError | any);
	const [accountLoading, setAccountLoading] = useState(true);
	const { unsplash, app } = useMetaData();

	const postRefreshUnsplash = useCallback(
		async (refreshToken: string | null) => {
			try {
				setAccountData(
					await (
						await axios.post(
							`https://unsplash.com/oauth/token?client_id=${unsplash.ACCESS_KEY}&client_secret=${unsplash.SECRET_KEY}&redirect_uri=${app.URL}&grant_type=refresh_token&refresh_token=${refreshToken}`,
						)
					).data,
				);
			} catch (err: AxiosError | any) {
				setAccountError(err);
			} finally {
				setAccountLoading(false);
			}
		},
		[],
	);

	useEffect(() => {
		if (localStorage.getItem("refresh_token") && !isRegistered) {
			postRefreshUnsplash(localStorage.getItem("refresh_token"));
		}
	}, [accessToken.length, isRegistered, postRefreshUnsplash]);

	useEffect(() => {
		if (accountData.access_token) {
			console.log(accountData, accountError);

			localStorage.setItem("refresh_token", accountData.refresh_token);
			dispatch(setAccessToken(accountData.access_token));
			dispatch(setIsRegistered(true));
		}
	}, [accountData, accountError, dispatch]);

	return { accountData, accountError, accountLoading };
}
