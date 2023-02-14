import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountInfo";

export default function useAccountCurrent() {
	const [data, setData] = useState({} as IAccountPublicData);
	const [error, setError] = useState("" as AxiosError | any);
	const [load, setLoad] = useState<boolean>(false);
	const { accessToken } = useAccountInfo();
	const getInfo = useCallback(async () => {
    console.log(accessToken, '12515231251251523');
    
		try {
			setData(
				await (
					await axios.get(`https://api.unsplash.com/me?access_token=${accessToken}`)
				).data,
			);
		} catch (err: AxiosError | any) {
			setError(err.message);
		} finally {
			setLoad(false);
		}
	}, []);

	useEffect(() => {
    console.log(accessToken, accessToken.length > 0, 'qwtqertqwetwetwertwert');
    
		if (accessToken.length > 0) {
			getInfo();
		}
	}, [accessToken]);

	useEffect(() => {
		console.log(data, error, "--------------------");
	}, [data, error]);

	return { data, error, load };
}
