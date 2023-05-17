import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { setInfo, setIsRegistered } from "../../store/accountSlice";
import useAccountInfo from "../../utils/info/useAccountInfo";

export default function useAccountCurrent(username: string) {
	const dispatch = useDispatch();

	const [data, setData] = useState({} as IAccountPublicData);
	const [error, setError] = useState("" as AxiosError | any);
	const [load, setLoad] = useState<boolean>(false);

	const getInfo = useCallback(async () => {
		try {
			setData(
				await (
					await axios.get(
						`https://api.unsplash.com/users/${username}`,
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
    if (typeof username === "string") {
      getInfo();
    }
  }, [getInfo, username]);

	return { data, error, load };
}

