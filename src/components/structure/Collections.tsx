import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import { Link } from "react-router-dom";
import Loading from "../functional/Loading";
import { IAccountCollection, ICollectionsFrame } from "../../interface";

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
	collectionsData: IAccountCollection[] | undefined;
	collectionsLoad?: boolean;
}) {
	
	return (
		<>
			<Loading loading={collectionsLoad}></Loading>
			<div className={`collections ${className}`}>
				{collectionsData?.slice(0, toShow).map((item, i) => {
					let photo0;
					let photo1;
					let photo2;
					if (!!item?.preview_photos) {
						photo0 = item?.preview_photos[0]?.urls?.regular;
						photo1 = item?.preview_photos[1]?.urls?.regular;
						photo2 = item?.preview_photos[2]?.urls?.regular;
					}

					return (
						<div className='collections__collection' key={item?.id}>
							<Image
								to={`/collection/${item?.id}`}
								className='collections__collection-photo1'
								src={photo0}
								style={{
									width: !!!photo1 ? "100%" : "50%",
									borderTopRightRadius: !!!photo1 ? "15px" : "0",
									borderBottomRightRadius: !!!photo1 ? "15px" : "0",
								}}
							></Image>
							<Image
								to={`/collection/${item?.id}`}
								className='collections__collection-photo2'
								style={{
									height: !!!photo2 ? "100%" : "50%",
									borderBottomRightRadius: !!!photo2 ? "15px" : "0",
								}}
								src={photo1}
							></Image>
							<Image
								to={`/collection/${item?.id}`}
								className='collections__collection-photo3'
								src={photo2}
							></Image>
						</div>
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
