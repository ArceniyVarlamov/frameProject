import FrameCol from "./FrameCol";
import useFetchByScroll from "../../hooks/functions/useFetchByScroll";
import { useCallback, useEffect, useState } from "react";

export default function Main() {
	// Количество столбиков
	const [colNum, setColNum] = useState(Math.round(window.innerWidth / 250));

	// Событие подзагрузки фреймов при скролле
	useFetchByScroll();

	// Считает количество столбиков в зависимости от длины экрана
	// Меняет количество столбцов при изменении ширины
	const frameHandler = useCallback(() => {
		setColNum(Math.round(window.innerWidth / 250));
	}, []);

	useEffect(() => {
		window.addEventListener("resize", frameHandler);
	}, [frameHandler]);

	return (
		<div className='main'>
			{Array(colNum)
				.fill("")
				.map((item, i) => (
					// framesPerLoad - Загрузится фреймов за 1 запрос
					// frameHeight - Высота 1 фрейма
					// frameHeightDiffusion - колебание в высоте 1 фрейма
					<FrameCol framesPerLoad={2} frameHeight={500} frameHeightDiffusion={100} column={i} />
				))}
		</div>
	);
}
