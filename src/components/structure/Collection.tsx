import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useEffect, useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import useAccountCollection from "./../../hooks/get/useAccontCollection";
import { IAccountCollection, IData } from "./../../interface";
import { Link } from "react-router-dom";

export default function Collection({
	id,
	frameWidth,
	...props
}: {
	id: string | null | undefined;
	frameWidth: number;
}) {
	const {
		dataCollection,
		dataCollectionPhotos,
		loadCollection,
	} = useAccountCollection(id);

	return (
		<div
			className='collection'
			{...props}
			style={{
				gridTemplateColumns: `repeat(auto-fill, ${frameWidth}px)`,
			}}
		>
			{dataCollectionPhotos?.map((item, i) => {
				return (
					<div
						className='collection__frame'
						style={{
							backgroundColor: item?.color,
							gridRowEnd: `span ${Math.round(item?.height / 100 < 35 ? 35 : item?.height / 100) || Math.random() * (40 - 10) + 10}`,
						}}
					>
						<Link to={`/frame/${item?.id}`} className='collection__link'>
							<Image
								src={item?.urls?.regular}
								className='collection__img'
							></Image>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
