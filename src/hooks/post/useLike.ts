import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import useMetaData from "../../utils/info/useMetaData";
export default function useLike(id: string, postLike: boolean | undefined) {
	const { accessToken } = useAccountInfo();

	const [frameData, setFrameData] = useState();
	const [frameError, setFrameError] = useState();
	const [frameLoading, setFrameLoading] = useState(true);

	const post = useCallback(async (id: string) => {
		try {
			setFrameData(
				await (
					await axios.post(`https://api.unsplash.com/photos/${id}/like?access_token=${accessToken}`)
				).data,
			);
		} catch (err: AxiosError | any) {
			setFrameError(err);
		} finally {
			setFrameLoading(false);
		}
	}, []);

	useEffect(() => {
		if (!!postLike && !!accessToken && !!id) {
			post(id);
		}
	}, [postLike, accessToken, id, post]);

	return { frameData, frameError, frameLoading };
}
