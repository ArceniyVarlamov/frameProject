import { NavLink } from "react-router-dom";
import { addFramesRedirect } from "../../store/framesSlice";
import Image from "./Image";
import { useDispatch } from "react-redux";
import { IData } from "../../interface";
import Loading from "./../functional/Loading";

export default function Main({
	framesWidth,
	frames,
	load,
}: {
	framesWidth: number;
	frames: IData[];
	load: boolean;
}) {
	const dispatch = useDispatch();

	return (
		<>
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
											item?.height / 100 <= 25 ? 35 : item?.height / 100,
										)}`,
									}}
									key={item?.id}
								>
									<div
										onClick={() => dispatch(addFramesRedirect())}
										className='main__link'
									>
										<Image
											to={`/frame/${item?.id}`}
											src={item?.urls?.regular}
											className='main__img'
											style={{
												backgroundColor: item?.color,
											}}
										/>
									</div>
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
			<Loading loading={load}></Loading>
		</>
	);
}
