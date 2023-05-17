import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useEffect, useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import { Link } from "react-router-dom";
import { ICollectionsFrame } from "../../interface";
import { IAccountCollection } from "./../../interface";

export default function Collections({
	username,
	className = "",
	toShow = -1,
}: {
	username: string | null;
	className?: string;
	toShow?: number;
}) {
	// const { data, error, load } = useAccountCollections(username);

	const data = [{id: 'N8dERqiW7Sg'} as IAccountCollection]


	return (
		<>
			<div className={`collections ${className}`}>
				{data ? (
					data?.slice(0, toShow).map((item, i) => {
						return (
							<Link
								to={`/collection/${item?.id}`}
								className='collections__collection'
								key={item?.id}
							>
								<Image src={item?.cover_photo?.urls?.regular}></Image>
							</Link>
						);
					})
				) : (
					<></>
				)}
			</div>
			{data.length > toShow ? (
				<Link className='collections__more' to={`/collections/${username}`}>
					Show more
				</Link>
			) : (
				<></>
			)}
		</>
	);
}
