import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { setInfo, setIsRegistered } from "../../store/accountSlice";
import useAccountInfo from "../../utils/info/useAccountInfo";

export default function useAccountCurrent() {
	const dispatch = useDispatch();

	const [data, setData] = useState({} as IAccountPublicData);
	const [error, setError] = useState("" as AxiosError | any);
	const [load, setLoad] = useState<boolean>(false);
	const { accessToken } = useAccountInfo();
	const getInfo = useCallback(async (accessToken: string) => {
		
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/me?access_token=${accessToken}`,
					)
				).data,
			);
		} catch (err: AxiosError | any) {
			setError(err.message);
		} finally {
			setLoad(false);
		}
	}, []);

	useEffect(() => {
		if (accessToken.length > 0) {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo]);

	useEffect(() => {
		if (data && !localStorage.getItem("accountInfo")) {
			localStorage.setItem("accountInfo", JSON.stringify(data))
			dispatch(setIsRegistered(true));
			dispatch(setInfo(data))
		}
	}, [data, dispatch, error]);

	return { data, error, load };
}
