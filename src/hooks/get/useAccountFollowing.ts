import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountInfo";

export default function useAccountFollowing(username: string | null = "") {
	const [data, setData] = useState([] as IAccountPublicData[]);
	const [error, setError] = useState("" as AxiosError | any);
	const [load, setLoad] = useState<boolean>(false);
	const { accessToken, links } = useAccountInfo();
	const getInfo = useCallback(async (accessToken: string, link: string) => {
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
		console.log(accessToken, accessToken.length > 0, "qwtqertqwetwetwertwert");

		if (typeof accessToken === 'string' && typeof links.following === 'string') {
			getInfo(accessToken, links.following);
		}
	}, [accessToken, getInfo, links.following]);

	return { data, error, load };
}
