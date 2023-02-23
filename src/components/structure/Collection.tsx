import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useEffect, useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import useAccountCollection from "./../../hooks/get/useAccontCollection";

export default function Collection({
	id,
	className,
}: {
	id: string | null | undefined;
	className?: string;
}) {
	const {
		dataCollection,
		dataCollectionPhotos,
		errorCollection,
		loadCollection,
	} = useAccountCollection(id);

	return (
		<div className={`collections ${className}`}>
      <div className="collections__title">{dataCollection?.title}</div>
			{dataCollectionPhotos!.map((item, i) => {
				return (
					<div className='collections__collection' key={item?.id}>
						<Image src={item?.urls.regular}></Image>
					</div>
				);
			})}
		</div>
	);
}
