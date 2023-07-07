import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IData } from "../../interface";
import useMetaData from "../../utils/info/useMetaData";
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useFunctionsStoreInfo from "../../utils/info/useFunctionsStoreInfo";

export default function useFramesId(id: string | null | undefined) {
	const [data, setData] = useState<IData>();
	const [load, setLoad] = useState(false);

	const { unsplash } = useMetaData();
	const { updateFrameData } = useFunctionsStoreInfo();

	const dispatch = useDispatch();

	const getInfo = useCallback(async () => {
		try {
			setData(
				await (
					await axios.get(`https://api.unsplash.com/photos/${id}`, {
						headers: {
							Authorization: `Client-ID ${unsplash.ACCESS_KEY}`,
						},
					})
				).data,
			);
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting frame data`);
			setData({
				height: Math.round(Math.random() * (4000 - 0) + 0),
				color: `rgba(${Math.random() * 125}, ${Math.random() * 125}, ${
					Math.random() * 125
				}, ${Math.random() + 0.2})`,
				views: Math.round(Math.random() * (10000000 - 0) + 0),
				downloads: Math.round(Math.random() * (10000000 - 0) + 0),
				description: "0".repeat(Math.round(Math.random() * (250 - 0) + 0)),
				user: {
					username: "Arceniy",
					location: "Moon",
					bio: "1".repeat(Math.round(Math.random() * (250 - 0) + 0)),
					total_photos: Math.round(Math.random() * (10000 - 0) + 0),
					total_likes: Math.round(Math.random() * (10000000 - 0) + 0),
				},
				likes: Math.round(Math.random() * (1000000 - 0) + 0),
				location: {
					name: "Moon",
				},
			} as IData);
		} finally {
			setLoad(false);
		}
	}, [dispatch, id, unsplash.ACCESS_KEY]);

	useEffect(() => {
		if (!!id) {
			getInfo();
		}
	}, [getInfo, id, updateFrameData]);

	return { data, load };
}
