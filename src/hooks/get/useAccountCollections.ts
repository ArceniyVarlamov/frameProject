import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import useAccountInfo from "../../utils/info/useAccountInfo";
import { IAccountCollection } from './../../interface';
import { addError } from "../../store/functionsSlice";
import { useDispatch } from "react-redux";

export default function useAccountCollections(username: string | null | undefined) {
	const [data, setData] = useState<IAccountCollection[]>();
	const [load, setLoad] = useState(false);
	
	const { accessToken } = useAccountInfo();

	const dispatch = useDispatch()

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
			addError(dispatch, `${err.message} occurred while getting collection data`)
		} finally {
			setLoad(false);
		}
	}, [username]);

	useEffect(() => {
		if (typeof accessToken === 'string' && typeof username === 'string') {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo, username]);

	return { data, load };
}

