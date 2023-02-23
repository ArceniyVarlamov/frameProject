import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountInfo";

export default function useAccountFollowers(username: string | null = "") {
	const [data, setData] = useState([] as IAccountPublicData[]);
	const [error, setError] = useState("" as AxiosError | any);
	const [load, setLoad] = useState<boolean>(false);
	const { accessToken, links } = useAccountInfo();
	const getInfo = useCallback(async (accessToken: string, link: string | null) => {
		try {
			setData(
				await (
					await axios.get(
						`${link}?access_token=${accessToken}`,
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
		if (typeof accessToken === 'string' && typeof links.followers === 'string') {
			getInfo(accessToken, links.followers);
		}
	}, [accessToken, getInfo, links.followers]);

	return { data, error, load };
}
