import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import { Link } from "react-router-dom";
import Loading from "../functional/Loading";
import {
	IAccountCollection,
	ICollectionProps,
	ICollectionsFrame,
} from "../../interface";
import lock from "../../images/lock.png";
import lockOpen from "../../images/lock-open.png";
import pencil from "../../images/pencil.png";
import { useState } from "react";
import EditCollection from "./EditCollection";
import useVariablesStoreInfo from "../../utils/info/useVariablesStoreInfo";

export default function CollectionsCollection({
	item,
	setCollectionData,
	setShowEditForm,
	randWidth,
}: {
	item: IAccountCollection | undefined;
	setCollectionData: (value: IAccountCollection | undefined) => void;
	setShowEditForm: (value: boolean) => void;
	randWidth: number,
}) {
	const [showCollectionSettings, setShowCollectionSettings] = useState(false);
	const { framesCollectionsWidth } = useVariablesStoreInfo();
	

	return (
		<div
			style={{backgroundColor: item?.cover_photo?.color || 'var(--grey220-color)', width: framesCollectionsWidth + randWidth | framesCollectionsWidth + 80}}
			className='collections__collection'
			onMouseEnter={() => setShowCollectionSettings(true)}
			onMouseLeave={() => setShowCollectionSettings(false)}
		>
			<Image
				to={`/collection/${item?.id}`}
				className='collections__collection-photo1'
				src={item?.preview_photos?.at(0)?.urls?.small}
				style={{
					width: !!!item?.preview_photos?.at(1) ? "100%" : "50%",
					borderTopRightRadius: !!!item?.preview_photos?.at(1) ? "15px" : "0",
					borderBottomRightRadius: !!!item?.preview_photos?.at(1) ? "15px" : "0",
				}}
			></Image>
			<Image
				to={`/collection/${item?.id}`}
				className='collections__collection-photo2'
				style={{
					height: !!!item?.preview_photos?.at(2) ? "100%" : "50%",
					borderBottomRightRadius: !!!item?.preview_photos?.at(2) ? "15px" : "0",
				}}
				src={item?.preview_photos?.at(1)?.urls?.small}
			></Image>
			<Image
				to={`/collection/${item?.id}`}
				className='collections__collection-photo3'
				src={item?.preview_photos?.at(2)?.urls?.small}
			></Image>
			{showCollectionSettings && (
				<div className='collections__info'>
					<div className='collections__total truncate'>
						{item?.total_photos} frames
					</div>
					<div className='collections__private'>
						<Image src={item?.private ? lock : lockOpen}></Image>
					</div>
					<div
						className='collections__edit'
						onClick={() => {
							setShowCollectionSettings(true);
							setCollectionData(item);
							setShowEditForm(true);
						}}
					>
						<Image src={pencil}></Image>
					</div>
				</div>
			)}
		</div>
	);
}
