import { Link } from "react-router-dom";
import Loading from "../functional/Loading";
import Error from "../functional/Error";
import useFramesList from "../../hooks/get/useFramesList";
import Image from "./Image";
import { useEffect, useRef, useState } from "react";
import { IData } from "../../interface";
import useFramesInfo from "../../utils/info/useFramesStoreInfo";
import useRandomHeight from "../../hooks/functions/useRandomHeights";
import useRandomHeights from "../../hooks/functions/useRandomHeights";
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from 'react-redux';

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

	const {framesLoaded} = useFramesInfo()

	const { frames, load } = useFramesList(framesPerLoad, column);

	const { randomHeights } = useRandomHeights(frameHeight, frameHeightDiffusion, framesPerLoad, frames.length);

	const dispatch = useDispatch()

	return (
		<div className='main__col' { ...props }>
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
								<Link onClick={() => dispatch(addFramesRedirect())} to={`/frame/${item?.id}`} className='main__link'>
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
