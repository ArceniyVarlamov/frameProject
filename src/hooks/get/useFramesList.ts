import axios, { AxiosError } from "axios";
import { useState, useEffect, useCallback } from "react";
import { IData } from "../../interface";
import useMetaData from "../../utils/info/useMetaData";
import useFramesInfo from "../../utils/info/useFramesInfo";
import { useDispatch } from "react-redux";
import { resetFramesLoaded } from "../../store/framesSlice";
import { addError } from "../../store/functionsSlice";

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export default function useFramesList(num: number, column: number) {
	const [frames, setFrames] = useState<IData[]>([]);
	const [load, setLoad] = useState(true);

	const { unsplash } = useMetaData();
	const { framesLoaded, framesRedirect } = useFramesInfo();
	
	const dispatch = useDispatch()

	useEffect(() => {
		if (framesRedirect !== 0) {
			dispatch(resetFramesLoaded())
			setFrames([]);
			setLoad(true);
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
			// let all: IData[] = [];
			// for (let i = frames.length; i < framesLoaded * num; i++) {
			// 	all.push({} as IData);
			// }
			// setFrames([...frames, ...all]);
		} catch (err: AxiosError | any) {
			addError(dispatch, `${err.message} occurred while getting collection data`)
		} finally {
			setLoad(false);
		}
	}, [column, framesLoaded, num]);

	// Когда пользователь достигнет границы страницы загружется информация
	useEffect(() => {
		getInfo();
	}, [getInfo, framesLoaded]);

	return { frames, load };
}
