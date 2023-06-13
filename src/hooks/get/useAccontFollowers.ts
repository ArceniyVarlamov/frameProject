import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountInfo";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";

export default function useAccountFollowers(username: string) {
	const [data, setData] = useState<IAccountPublicData[]>();
	const [load, setLoad] = useState(false);

	const { accessToken } = useAccountInfo();

	const dispatch = useDispatch()

	const getInfo = useCallback(async (accessToken: string) => {
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/users/${username}/followers?access_token=${accessToken}`,
					)
				).data,
			);
		} catch (err: AxiosError | any) {
			dispatch(addError(`${err.message} occurred while getting followers data`))
		} finally {
			setLoad(false);
		}
	}, []);

	useEffect(() => {
		if (typeof accessToken === 'string' && typeof username === 'string') {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo, username]);

	return { data, load };
}
