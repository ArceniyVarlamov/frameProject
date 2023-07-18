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
export default function useFramesList(page:number, perLoad: number) {
	const [frames, setFrames] = useState<IData[]>([]);
	const [load, setLoad] = useState(true);

	const { unsplash } = useMetaData();

	const dispatch = useDispatch();

	const getInfo = useCallback(async () => {
		try {
			// setFrames(
			// 	[...frames, ...(await (
			// 		await axios.get(
			// 			`https://api.unsplash.com/photos/random?count=${page * perLoad - frames.length}`,
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
			for (let i = frames.length; i < page * perLoad; i++) {
				all.push({
					height: Math.random() * (6000 - 4000) + 4000,
					color: `rgba(${Math.random() * 125}, ${Math.random() * 125}, ${
						Math.random() * 125
					}, ${Math.random() + 0.2})`,
					blur_hash: "LB84i6~q-;t7ofRjM{fQxuofayWB",
					id: page * i,
				} as unknown as IData);
			}
			setFrames([...frames, ...all]);
		} catch (err: unknown) {
			const error = err as AxiosError;
			addError(dispatch, `${error.message} while getting frames data`);
			
		} finally {
			setLoad(false);
		}
	}, [page, perLoad]);

	// Когда пользователь достигнет границы страницы загружется информация
	useEffect(() => {
		getInfo();
	}, [getInfo, page]);

	return { frames, load };
}
