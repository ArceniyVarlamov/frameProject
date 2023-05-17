import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { IData } from "../../interface";
import useMetaData from "../../utils/info/useMetaData";
import useFramesInfo from "../../utils/info/useFramesInfo";

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export default function useFramesList(
	num: number,
) {
	const [frames, setFrames] = useState<IData[]>([]);
	const { col } = useFramesInfo();
	const [error, setError] = useState("");
	const [load, setLoad] = useState(true);

	const { unsplash } = useMetaData();

	const getInfo = useCallback(async () => {
		try {
			// setFrames(
			// 	[...frames, ...(await (
			// 		await axios.get(
			// 			`https://api.unsplash.com/photos/random?count=${num}`,
			// 			{
			// 				headers: {
			// 					Authorization: `Client-ID ${unsplash.ACCESS_KEY}`,
			// 				},
			// 			},
			// 		)
			// 	).data)]
			// );
			let all = []
			for (let i = 0; i <= num; ++i) {
					all.push({} as IData)
			}
			setFrames(
				all
			)
		} catch (err: AxiosError | any) {
			setError(await err.message);
		} finally {
			setLoad(false);
		}
	}, []);

	// Когда пользователь достигнет границы страницы загружется информация
	useEffect(() => {
		getInfo();
	}, [getInfo, col]);

	return { frames, error, load };
}
