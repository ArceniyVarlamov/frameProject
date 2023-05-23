import { Link } from "react-router-dom";
import Loading from "../functional/Loading";
import Error from "../functional/Error";
import useFramesList from "../../hooks/get/useFramesList";
import Image from "./Image";
import { useEffect, useRef, useState } from "react";
import { IData } from "../../interface";
import useFramesInfo from "../../utils/info/useFramesInfo";
import useRandomHeight from "../../hooks/functions/useRandomHeights";
import useRandomHeights from "../../hooks/functions/useRandomHeights";

export default function FrameCol({
	framesPerLoad,
	frameHeight,
	frameHeightDiffusion,
	column,
	...props
}: {
	framesPerLoad: number;
	frameHeight: number;
	frameHeightDiffusion: number;
	column: number
}) {

	const [col, setCol] = useState(1)
	const {framesLoaded} = useFramesInfo()

	const { frames, error, load } = useFramesList(framesPerLoad, column);

	const { randomHeights } = useRandomHeights(frameHeight, frameHeightDiffusion, framesPerLoad);

	// ООООООООЧЕЕЕНЬ странная заглушка,
	// которая работает лишь из-за рендеринга компонентов после загрузки
	// проблема была в изменении масштаба, сейчас она с помощью этого работает,
	// Перепробоал с useState миллиарды вариантов, пробовал другую структуру,
	// А на самом деле проблема была в этом рендеринге который происходил в самом
	// хуке получения фреймов.
	useEffect(() => {
		setCol(col + 1)
	}, [col, frames]);

	return (
		<div className='main__col' { ...props }>
			<Error err={error} />
			<Loading loading={load} />
			{frames!.map((item, i) => {
				return (
					<div key={item.id}>
						{!load && (
							<div
								className='main__frame'
								style={{
									backgroundColor: item?.color,
									height: `${randomHeights[i]}px`,
								}}
							>
								<Link to={`/frame/${item?.id}`} className='main__link'>
									<Image
										src={item?.urls?.regular}
										className='main__img'
									></Image>
									<div className='main__author'>{item?.user?.username}</div>
								</Link>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
