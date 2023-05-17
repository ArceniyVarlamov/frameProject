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
import useRandomHeights from "../../hooks/functions/useRandomHeights";

export default function Collection({
	id,
	frameHeight,
	...props
}: {
	id: string | null;
	frameHeight: number;
}) {
	// const {
	// 	dataCollection,
	// 	dataCollectionPhotos,
	// 	errorCollection,
	// 	loadCollection,
	// } = useAccountCollection(id);

	const dataCollection = {} as IAccountCollection;
	const dataCollectionPhotos = [
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
	] as IData[];

	const {randomHeights} = useRandomHeights(frameHeight, 200)
	
	return (
		<div className='collection' {...props}>
			{dataCollectionPhotos!.map((item, i) => {
				return (
					<div
						className='collection__frame'
						style={{
							backgroundColor: item?.color,
							height: `${randomHeights[i]}px`,
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
