import axios, { AxiosError } from "axios";
import { useState, useEffect, useCallback } from "react";
import { IData } from "../../interface";
import useMetaData from "../../utils/info/useMetaData";
import useFramesStoreInfo from "../../utils/info/useFramesStoreInfo";
import { useDispatch } from "react-redux";
import {
	addFramesLoaded,
	resetFramesLoaded,
	resetFramesRedirect,
} from "../../store/framesSlice";
import { addError } from "../../store/functionsSlice";

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export default function useFramesList(perLoad: number) {
	const [frames, setFrames] = useState<IData[]>([]);
	const [load, setLoad] = useState(true);

	const { unsplash } = useMetaData();
	const { framesLoaded, framesRedirect } = useFramesStoreInfo();

	const dispatch = useDispatch();

	useEffect(() => {
		if (framesRedirect) {
			window.scrollTo(0, 0);
			dispatch(resetFramesLoaded());
			dispatch(resetFramesRedirect());
			setFrames(frames.slice(frames.length - framesLoaded * perLoad));
		}
	}, [framesRedirect]);

	const getInfo = useCallback(async () => {
		try {
			// setFrames(
			// 	[...frames, ...(await (
			// 		await axios.get(
			// 			`https://api.unsplash.com/photos/random?count=${framesLoaded * perLoad - frames.length}`,
			// 			{
			// 				headers: {
			// 					Authorization: `Client-ID ${unsplash.ACCESS_KEY}`,
			// 				},
			// 			},
			// 		)
			// 	).data)]
			// );
			// Вариант если api ограничивает запросы
			let all: IData[] = [];
			for (let i = frames.length; i < framesLoaded * perLoad; i++) {
				all.push({
					height: Math.random() * (6000 - 2000) + 2000,
					color: `rgba(${Math.random() * 125}, ${Math.random() * 125}, ${
						Math.random() * 125
					}, ${Math.random() + 0.2})`,
					blur_hash: "LB84i6~q-;t7ofRjM{fQxuofayWB",
				} as IData);
			}
			setFrames([...frames, ...all]);
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting frames data`);
			
		} finally {
			setLoad(false);
		}
	}, [framesLoaded, perLoad]);

	// Когда пользователь достигнет границы страницы загружется информация
	useEffect(() => {
		getInfo();
	}, [getInfo, framesLoaded]);

	return { frames, load };
}
