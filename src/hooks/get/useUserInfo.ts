import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { addError } from "../../store/functionsSlice";

export default function useAccountCurrent(username: string) {
	const [data, setData] = useState({} as IAccountPublicData);
	const [load, setLoad] = useState<boolean>(false);
	
	const dispatch = useDispatch();

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
			addError(dispatch, `${err.message} occurred while getting collection data`)
		} finally {
			setLoad(false);
		}
	}, [username]);

  useEffect(() => {
    if (typeof username === "string") {
      getInfo();
    }
  }, [getInfo, username]);

	return { data, load };
}

