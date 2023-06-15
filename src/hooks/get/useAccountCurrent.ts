import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { setInfo, setIsRegistered } from "../../store/accountSlice";
import useAccountInfo from "../../utils/info/useAccountInfo";
import { addError } from "../../store/functionsSlice";

export default function useAccountCurrent() {
	const [meData, setMeData] = useState<IAccountPublicData>();
	const [load, setLoad] = useState(false);

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
		} catch (err: AxiosError | any) {
			addError(dispatch, `${err.message} occurred while getting collection data`)
		} finally {
			setLoad(false);
		}
	}, []);

	useEffect(() => {
		if (typeof accessToken === 'string') {
			getInfo(accessToken);
		}
	}, [accessToken, getInfo]);

	return { meData, load };
}
