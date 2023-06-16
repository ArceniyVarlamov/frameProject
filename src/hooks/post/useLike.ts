import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import useMetaData from "../../utils/info/useMetaData";
export default function useLike(id: string, like: boolean | undefined) {
	const { accessToken } = useAccountInfo();

	const [frameData, setFrameData] = useState();
	const [frameError, setFrameError] = useState();
	const [frameLoading, setFrameLoading] = useState(true);

	const postLike = useCallback(async (code: string) => {
		try {
			setFrameData(
				await (
					await axios.post(`https://api.unsplash.com/photos/${id}/like`, {
						headers: { Authorization: `Bearer ${accessToken}` },
					})
				).data,
			);
		} catch (err: AxiosError | any) {
			setFrameError(err);
		} finally {
			setFrameLoading(false);
		}
	}, []);

	useEffect(() => {
		if (like && accessToken) {
			postLike(id);
		}
	}, [like, accessToken]);

	return { frameData, frameError, frameLoading };
}
