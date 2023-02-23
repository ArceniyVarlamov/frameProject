import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import useAccountInfo from "../../utils/info/useAccountInfo";
import { IAccountCollection } from './../../interface';

export default function useAccountCollections(username: string | null = "") {
	const [data, setData] = useState([] as IAccountCollection[]);
	const [error, setError] = useState("" as AxiosError | any);
	const [load, setLoad] = useState<boolean>(false);
	const { accessToken } = useAccountInfo();
	const getInfo = useCallback(async (accessToken: string) => {
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/users/${username}/collections?access_token=${accessToken}`,
					)
				).data,
			);
		} catch (err: AxiosError | any) {
			setError(err.message);
		} finally {
			setLoad(false);
		}
	}, [username]);

	useEffect(() => {
		if (typeof accessToken === 'string') {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo]);

  useEffect(() => {
    console.log(data, error, load);
    
  }, [data, error, load]);

	return { data, error, load };
}
