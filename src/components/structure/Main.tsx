import FrameCol from "./FrameCol";
import useFetchByScroll from "../../hooks/functions/useFetchByScroll";
import { useCallback, useEffect, useState } from "react";

export default function Main({
	framesPerLoad,
	frameHeight,
	frameHeightDiffusion,
}: {
	framesPerLoad: number;
	frameHeight: number;
	frameHeightDiffusion: number;
}) {
	// Количество столбиков
	const [colNum, setColNum] = useState(Math.round(window.innerWidth / 250));
	const [lineNum, setLineNum] = useState(Math.round(window.innerHeight / frameHeight * 1.5));

	// Событие подзагрузки фреймов при скролле
	useFetchByScroll();

	// Считает количество столбиков в зависимости от длины экрана
	// Меняет количество столбцов при изменении ширины
	const frameHandler = useCallback(() => {
		setColNum(Math.round(window.innerWidth / 250));
		setLineNum(Math.round(window.innerHeight / frameHeight));
	}, []);

	useEffect(() => {
		window.addEventListener("resize", frameHandler);
	}, [frameHandler]);

	return (
		<div className='main'>
			{Array(colNum > 2 ? 2 : colNum)
				.fill("")
				.map((item, i) => (
					// framesPerLoad - Загрузится фреймов за 1 запрос
					// frameHeight - Высота 1 фрейма
					// frameHeightDiffusion - колебание в высоте 1 фрейма
					<FrameCol
						framesPerLoad={lineNum}
						frameHeight={frameHeight}
						frameHeightDiffusion={frameHeightDiffusion}
						column={i}
					/>
				))}
		</div>
	);
}
