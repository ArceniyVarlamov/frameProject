import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useEffect, useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";

export default function Collections({
	username,
	className,
}: {
	username: string | null;
	className?: string;
}) {
  
	const { data, error, load } = useAccountCollections(username);
	
	return (
    <div className={`collections ${className}`}>
			{data!.map((item, i) => {
				return (
					<div className="collections__collection" key={item?.id}>
						<Image
							src={item?.cover_photo.urls.regular}
						></Image>
					</div>
				)
			})}
    </div>
  );
}
