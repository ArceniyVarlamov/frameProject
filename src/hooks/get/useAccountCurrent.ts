import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { setLinks } from "../../store/accountSlice";
import useAccountInfo from "../../utils/info/useAccountInfo";

export default function useAccountCurrent() {
	const dispatch = useDispatch();

	const [data, setData] = useState({} as IAccountPublicData);
	const [error, setError] = useState("" as AxiosError | any);
	const [load, setLoad] = useState<boolean>(false);
	const { accessToken } = useAccountInfo();
	const getInfo = useCallback(async (accessToken: string) => {
		console.log(accessToken, "12515231251251523");

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
		console.log(accessToken, accessToken.length > 0, "qwtqertqwetwetwertwert");

		if (accessToken.length > 0) {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo]);

	useEffect(() => {
		if (data?.links) {
			dispatch(setLinks(data?.links))
		}
	}, [data, dispatch, error]);

	return { data, error, load };
}
