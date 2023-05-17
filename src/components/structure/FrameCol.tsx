import { Link } from "react-router-dom";
import Loading from "../functional/Loading";
import Error from "../functional/Error";
import useFramesList from "../../hooks/get/useFramesList";
import Image from "./Image";
import { useEffect, useState } from "react";
import { IData } from "../../interface";
import useFramesInfo from "../../utils/info/useFramesInfo";
import useRandomHeight from "../../hooks/functions/useRandomHeights";
import useRandomHeights from "../../hooks/functions/useRandomHeights";

export default function FrameCol({
	num,
	frameHeight,
	frameHeightDiffusion,
	...props
}: {
	num: number;
	frameHeight: number;
	frameHeightDiffusion: number;
}) {
	const [prev, setPrev] = useState<IData[]>([]);

	const { frames, error, load } = useFramesList(num);

	const { randomHeights } = useRandomHeights(frameHeight, 200, num);

	useEffect(() => {
		if (frames) {
			setPrev([...prev, ...frames]);
		}
	}, [frames]);

	return (
		<div className='main__col'>
			<Error err={error} />
			<Loading loading={load} />
			{prev!.map((item, i) => {
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
