import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { addFramesLoaded } from "../../store/framesSlice";
import { IFramesState } from "./../../store/framesSlice";
import useFramesInfo from "../../utils/info/useFramesStoreInfo";

export default function useFetchByScroll(element?: HTMLDivElement | null) {
	const [fetching, setFetching] = useState<boolean>(false);
	const [dataLoaded, setDataLoaded] = useState(1);

	const dispatch = useDispatch();

	// Условие при котором меняется фетчинг

	const documentScrollHandler = useCallback((e: any) => {
		if (
			e.target.scrollingElement.scrollHeight -
				(e.target.scrollingElement.scrollTop + window.innerHeight) <
				100 &&
			!fetching
		) {
			setFetching(true);
		} else {
			setFetching(false);
		}
	}, [fetching]);

	const elementScrollHandler = useCallback((e: any) => {
		if (
			e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100 &&
			!fetching
			) {
			setFetching(true);
			
		} else {
			setFetching(false);
		}
	}, [fetching]);

	// Добавление слушателя скролла
	useEffect(() => {
		if (!!element) {
			element.addEventListener("scroll", elementScrollHandler);
			return () => {
				element.removeEventListener("scroll", documentScrollHandler);
				setDataLoaded(1)
			}
		} else if (!!!element) {
			document.addEventListener("scroll", documentScrollHandler);
			return () => {
				document.removeEventListener("scroll", documentScrollHandler);
				setDataLoaded(1)
			}
		}
	}, [element]);

	useEffect(() => {
		
		if (!!fetching) {
			// Увеличивает количество групп фреймов в колонке
			setDataLoaded(dataLoaded + 1);
			setFetching(false);
		}
	}, [dataLoaded, dispatch, fetching]);

	return {dataLoaded, setDataLoaded}
}
