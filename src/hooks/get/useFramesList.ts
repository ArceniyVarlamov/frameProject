import axios, { AxiosError } from "axios";
import { useState, useEffect, useCallback } from "react";
import { IData } from "../../interface";
import useMetaData from "../../utils/info/useMetaData";
import useFramesInfo from "../../utils/info/useFramesStoreInfo";
import { useDispatch } from "react-redux";
import { addFramesLoaded, resetFramesLoaded, resetFramesRedirect } from "../../store/framesSlice";
import { addError } from "../../store/functionsSlice";

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export default function useFramesList(num: number) {
	const [frames, setFrames] = useState<IData[]>([]);
	const [load, setLoad] = useState(true);

	const { unsplash } = useMetaData();
	const { framesLoaded, framesRedirect } = useFramesInfo();
	
	const dispatch = useDispatch()

	useEffect(() => {
		if (framesRedirect) {
			window.scrollTo(0, 0)
			dispatch(resetFramesLoaded())
			dispatch(resetFramesRedirect())
			setFrames(frames.slice(frames.length - framesLoaded * num))
		}
	}, [framesRedirect]);

	const getInfo = useCallback(async () => {
		try {
			setFrames(
				[...frames, ...(await (
					await axios.get(
						`https://api.unsplash.com/photos/random?count=${framesLoaded * num - frames.length}`,
						{
							headers: {
								Authorization: `Client-ID ${unsplash.ACCESS_KEY}`,
							},
						},
					)
				).data)]
			);
			// Вариант если api ограничивает запросы
			// const heights = [400, 700, 1400, 300, 600, 500]

			// let all: IData[] = [];
			// for (let i = frames.length; i < framesLoaded * num; i++) {
			// 	all.push({height: heights[i % heights.length]} as IData);
			// }
			// setFrames([...frames, ...all]);
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting frames data`)
		} finally {
			setLoad(false);
		}
	}, [framesLoaded, num]);

	// Когда пользователь достигнет границы страницы загружется информация
	useEffect(() => {
		getInfo();
	}, [getInfo, framesLoaded]);

	return { frames, load };
}
