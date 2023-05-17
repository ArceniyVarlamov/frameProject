import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountInfo";

export default function useAccountFollowing(username: string | null) {
	const [data, setData] = useState([] as IAccountPublicData[]);
	const [error, setError] = useState("" as AxiosError | any);
	const [load, setLoad] = useState<boolean>(false);
	const { accessToken, accountInfo } = useAccountInfo();
	const getInfo = useCallback(async (accessToken: string) => {
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/users/${username}/following?access_token=${accessToken}`,
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
		console.log(accountInfo);

		if (typeof accessToken === 'string') {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo, accountInfo]);

	return { data, error, load };
}
