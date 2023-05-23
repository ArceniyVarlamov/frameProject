import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { addFramesLoaded } from "../../store/framesSlice";
import { IFramesState } from "./../../store/framesSlice";
import useFramesInfo from "../../utils/info/useFramesInfo";

export default function useFetchByScroll() {
	const [fetching, setFetching] = useState<boolean>(false);

	const dispatch = useDispatch();

	const { framesLoaded } = useFramesInfo();

	// Условие при котором меняется фетчинг

	const scrollHandler = useCallback((e: any) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
				50 &&
			!fetching
		) {
			setFetching(true);
		} else {
			setFetching(false);
		}
	}, []);
	// Добавление слушателя скролла
	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);

		return () => {
			document.removeEventListener("scroll", scrollHandler);
		};
	}, [scrollHandler]);

	useEffect(() => {
		if (fetching) {
			// Увеличивает количество групп фреймов в колонке
			dispatch(addFramesLoaded());
			setFetching(false);
		}
	}, [dispatch, fetching]);

	return { framesLoaded };
}
