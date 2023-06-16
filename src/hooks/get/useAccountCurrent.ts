import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import { addError } from "../../store/functionsSlice";

export default function useAccountCurrent() {
	const [meData, setMeData] = useState<IAccountPublicData>();
	const [load, setLoad] = useState(false);

	const { accessToken } = useAccountInfo();

	const dispatch = useDispatch()

	const getInfo = useCallback(async () => {
		
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
		} finally {
			setLoad(false);
		}
	}, [accessToken, dispatch]);

	useEffect(() => {
		if (typeof accessToken === 'string') {
			getInfo();
		}
	}, [accessToken, getInfo]);

	return { meData, load };
}
