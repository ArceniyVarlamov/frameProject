import { useState, useEffect, useCallback } from "react";
import useVariablesStoreInfo from "../../utils/info/useVariablesStoreInfo";

export default function useCountResize(framesWidth: number) {
	// Переменная значения высоты столбиков. 2 - примерное значение, чтобы фреймы занимали ровно одну страницу
	const { framesHeightConst } = useVariablesStoreInfo();

	// Количество столбиков
	const [colNum, setColNum] = useState(
		Math.round(window.innerWidth / framesWidth / framesHeightConst),
	);
	// Примерное количество столбиков в длину
	const [lineNum, setLineNum] = useState(Math.round(window.innerHeight / framesWidth));

	const windowHandler = useCallback(() => {
		setColNum(Math.round(window.innerWidth / framesWidth / framesHeightConst));
		setLineNum(Math.round(window.innerHeight / framesWidth));
	}, [framesWidth]);

	useEffect(() => {
		window.addEventListener("resize", windowHandler);
	}, [windowHandler]);

	return { colNum, lineNum };
}
