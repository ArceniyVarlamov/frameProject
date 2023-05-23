import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { IData } from "../../interface";
import useMetaData from "../../utils/info/useMetaData";
import useFramesInfo from "../../utils/info/useFramesInfo";
import { useDispatch } from 'react-redux';

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export default function useFramesList(num: number, column: number) {
	const frames = useRef<IData[]>([]);
	const [error, setError] = useState("");
	const [load, setLoad] = useState(true);
	const { unsplash } = useMetaData();
	const {framesLoaded} = useFramesInfo()

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
			let all: IData[] = [];
			console.log(frames.current.length, framesLoaded * num, column);
			
			for (let i = frames.current.length; i < framesLoaded * num; i++) {
				console.log('aaaaa');
				
				all.push({} as IData);
			}
			frames.current = [...frames.current, ...all]
		} catch (err: AxiosError | any) {
			setError(await err.message);
		} finally {
			setLoad(false);
		}
	}, [column, framesLoaded, num]);

	// Когда пользователь достигнет границы страницы загружется информация
	useEffect(() => {
		getInfo();
	}, [getInfo, framesLoaded]);


	return { frames: frames.current, error, load };
}
