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
import { useEffect, useState } from "react";
import EditCollection from "./EditCollection";
import CollectionsCollection from "./CollectionsCollection";
import useCountResize from "../../hooks/functions/useCountResize";
import useVariablesStoreInfo from "../../utils/info/useVariablesStoreInfo";

export default function Collections({
	username,
	className = "",
	toShow = -1,
	collectionsData,
	collectionsLoad = false,
}: {
	username?: string | null | undefined;
	className?: string;
	toShow?: number;
	collectionsData: IAccountCollection[];
	collectionsLoad?: boolean;
}) {

	const [showEditForm, setShowEditForm] = useState(false);
	const [collectionData, setCollectionData] = useState<IAccountCollection>();
	const { framesCollectionsWidth } = useVariablesStoreInfo();
	const [randWidth, setRandWidth] = useState<number[]>([])
	useEffect(() => {
		for (let i = randWidth.length; i < collectionsData?.length; i++) {
			setRandWidth([...randWidth, framesCollectionsWidth + Math.floor(Math.random() * (80 - 40) + 40)])
		}
	}, [collectionsData, randWidth]);
	
	return (
		<>
			{showEditForm && (
				<EditCollection
					show={showEditForm}
					setShow={setShowEditForm}
					collectionData={collectionData}
				/>
			)}
			<Loading loading={collectionsLoad}></Loading>
			<div className={`collections ${className}`}>
				{collectionsData?.slice(0, toShow).map((item, i) => {
					
					return (
						<CollectionsCollection
							randWidth={randWidth[i]}
							key={item?.id}
							item={item}
							setCollectionData={setCollectionData}
							setShowEditForm={setShowEditForm}
						></CollectionsCollection>
					);
				})}
			</div>
			{collectionsData?.length! > toShow ? (
				<Link className='collections__more' to={`/collections/${username}`}>
					Show more
				</Link>
			) : (
				<></>
			)}
		</>
	);
}
