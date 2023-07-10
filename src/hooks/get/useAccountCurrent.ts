import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import { addError } from "../../store/functionsSlice";
import { setInfo } from "../../store/accountSlice";

export default function useAccountCurrent() {
	const [meData, setMeData] = useState<IAccountPublicData>();

	const { accessToken } = useAccountInfo();

	const dispatch = useDispatch()

	const getInfo = useCallback(async (accessToken: string) => {
		
		try {
			setMeData(
				await (
					await axios.get(
						`https://api.unsplash.com/me?access_token=${accessToken}`,
					)
				).data,
			);
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting your account data`)
		}
	}, []);

	useEffect(() => {
		if (!!accessToken) {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo]);

	useEffect(() => {
		if (!!meData) {
			dispatch(setInfo(meData))
		}
	}, [dispatch, meData]);
}
