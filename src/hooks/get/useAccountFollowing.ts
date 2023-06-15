import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountInfo";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";

export default function useAccountFollowing(username: string | null | undefined) {
	const [data, setData] = useState<IAccountPublicData[]>();
	const [load, setLoad] = useState(false);

	const { accessToken } = useAccountInfo();

	const dispatch = useDispatch()

	const getInfo = useCallback(async (accessToken: string, username: string) => {
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/users/${username}/following?access_token=${accessToken}`,
					)
				).data,
			);
		} catch (err: AxiosError | any) {
			addError(dispatch, `${err.message} occurred while getting collection data`)
		} finally {
			setLoad(false);
		}
	}, [dispatch]);

	useEffect(() => {
		console.log(username, typeof username, '111111111', typeof username === 'string');
		if (typeof accessToken === 'string' && typeof username === 'string') {
			console.log(username, typeof username, '22222222222', typeof username === 'string');
			getInfo(accessToken, username);
		}
	}, [accessToken, getInfo, username]);

	return { data, load };
}
