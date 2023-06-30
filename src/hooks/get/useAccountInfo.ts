import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function useAccountInfo(username: string | undefined) {
	const [data, setData] = useState({} as IAccountPublicData);
	const [load, setLoad] = useState<boolean>(false);
	
	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();

	const getInfo = useCallback(async (accessToken: string, username: string) => {
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/users/${username}?access_token=${accessToken}`,
					)
				).data,
			);
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting account data`)
		} finally {
			setLoad(false);
		}
	}, []);

  useEffect(() => {
    if (!!username && !!accessToken) {
      getInfo(accessToken, username);
    }
  }, [accessToken, getInfo, username]);

	return { data, load };
}

