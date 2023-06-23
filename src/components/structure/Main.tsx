import useFetchByScroll from "../../hooks/functions/useFetchByScroll";
import { useCallback, useEffect, useState } from "react";
import useFramesList from "../../hooks/get/useFramesList";
import { Link, NavLink } from "react-router-dom";
import { addFramesRedirect } from "../../store/framesSlice";
import Image from "./Image";
import { useDispatch } from "react-redux";

export default function Main({
	framesWidth,
}: {
	framesWidth: number;
}) {
	// Количество столбиков
	const [colNum, setColNum] = useState(
		Math.round(window.innerWidth / framesWidth / 1.4),
	);
	const [lineNum, setLineNum] = useState(Math.round(window.innerHeight / 220));

	// Событие подзагрузки фреймов при скролле
	useFetchByScroll();

	const windowHandler = useCallback(() => {
		setColNum(Math.round(window.innerWidth / framesWidth / 1.4));
		setLineNum(Math.round(window.innerHeight / 220));
	}, []);

	useEffect(() => {
		window.addEventListener("resize", windowHandler);
	}, []);

	const { frames, load } = useFramesList(colNum * lineNum);

	const dispatch = useDispatch();

	return (
		<div
			className='main'
			style={{
				// Отвечает за длину каждого фрейма
				gridTemplateColumns: `repeat(auto-fill, ${framesWidth}px)`,
			}}
		>
			{frames?.map((item, i) => {
				return (
					<>
						{!load && (
							<div
								className='main__frame'
								style={{
									backgroundColor: item?.color,
									// Отвечает за высоту каждого фрейма
									gridRowEnd: `span ${Math.round(
										(item?.height / 100 < 35 ? 35 : item?.height / 100) || Math.random() * (40 - 10) + 10,
									)}`,
								}}
							>
								<Link
									onClick={() => dispatch(addFramesRedirect())}
									to={`/frame/${item?.id}`}
									className='main__link'
								>
									<Image
										src={item?.urls?.regular}
										className='main__img'
										style={{
											backgroundColor: item?.color,
										}}
									/>
								</Link>
								<NavLink
									className='main__author'
									to={`/account/${item?.user?.username}`}
								>
									<p className='main__author-username'>
										{item?.user?.username}
									</p>
									<Image
										src={item?.user?.profile_image?.medium}
										className='main__author-img'
									/>
								</NavLink>
							</div>
						)}
					</>
				);
			})}
		</div>
	);
}
