import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useEffect, useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import { Link } from "react-router-dom";

export default function Collections({
	username,
	className,
}: {
	username: string | null;
	className?: string;
}) {
  
	const { data, error, load } = useAccountCollections(username);

	console.log(data, 'asfwqwtttttttt');
	
	
	return (
    <div className={`collections ${className}`}>
			{data ? data?.map((item, i) => {
				return (
					<Link to={`collection/${item?.id}`} className="collections__collection" key={item?.id}>
						<Image
							src={item?.cover_photo.urls?.regular}
						></Image>
					</Link>
				)
			}) : <></>}
    </div>
  );
}
