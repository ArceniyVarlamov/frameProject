import { useEffect, useState } from "react";
import Loading from "../functional/Loading";
import Error from "../functional/Error";
import useFramesId from "../../hooks/get/useFramesId";
import useColor from "./../../hooks/functions/useColor";
import download from "../../images/download.png";
import share from "../../images/share.png";
import plus from "../../images/plus.png";
import likeImg from "../../images/heart.svg";
import useLike from "../../hooks/post/useLike";
import conditional from "../../utils/functional/condition";
import Image from "./Image";
import { NavLink } from "react-router-dom";
import Collections from "./Collections";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";
import { IAccountPublicData } from "../../interface";
import CollectionAdd from "./CollectionAdd";

export default function Frame({
	id,
	accountData,
}: {
	id: string;
	accountData: IAccountPublicData | undefined;
}) {
	// own hooks
	const { data, load } = useFramesId(id);

	const color = useColor(data?.color);

	const [like, setLike] = useState(data?.liked_by_user);
	const [showCollection, setShowCollection] = useState(false);

	// const { frameData, frameError, frameLoading } = useLike(id, like);

	return (
		<>
			<CollectionAdd
				username={accountData?.username}
				frameInfo={data}
				show={showCollection}
				setShow={setShowCollection}
			></CollectionAdd>
			<Loading loading={load} />
			{!load && (
				<div className='frame'>
					<div className='frame__main'>
						<Image
							className='frame__img'
							src={data?.urls?.full}
							style={{ backgroundColor: data?.color }}
						></Image>
						<div className='frame__main-options'>
							<div className='frame__main-container'>
								<svg
									className='frame__main-like'
									style={{ fill: like ? data?.color : "var(--black-color)" }}
									onClick={() => setLike(!like)}
									viewBox='0 0 16 16'
								>
									{" "}
									<path
										fill-rule='evenodd'
										d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
									/>{" "}
								</svg>
								<div
									className='frame__main-add'
									onClick={() => setShowCollection(true)}
								>
									<Image src={plus}></Image>
								</div>
							</div>
						</div>
					</div>

					<div className='frame__info'>
						<div className='frame__links'>
							<div>
								<img src={download} alt='download' />
							</div>
							<div>
								<img src={share} alt='share' />
							</div>
							<p className='frame__views'>
								{conditional({ src: data?.views, addEnd: " views", slice: 8 })}
							</p>
							<p className='frame__downloads'>
								{conditional({
									src: data?.downloads,
									addEnd: " downloads",
									slice: 8,
								})}
							</p>
						</div>
						<div className='frame__author'>
							<div className='frame__user'>
								<Image
									to={`/account/${data?.user?.username}`}
									src={data?.user?.profile_image?.small}
									className='frame__icon'
								></Image>

								<div className='frame__user-goal'>
									<p className='truncate frame__username'>
										{conditional({ src: data?.user?.username })}
									</p>
									<p className='truncat frame__total-photos'>
										{conditional({
											src: data?.user?.total_photos + " photos",
										})}
									</p>
								</div>
							</div>
							<div className='frame__description'>
								{conditional({
									src: data?.description || data?.alt_description,
								})}
							</div>
						</div>
						<div className='frame__likes'>
							<div>
								<p>
									{!!data?.likes &&
										conditional({
											src: data?.likes + " likes",
										})}
								</p>
							</div>
							<div className='frame__location'>
								<p>
									{conditional({
										src: data?.location?.name,
										addStart: "location: ",
										slice: 30,
									})}
								</p>
							</div>
						</div>

						<div className='frame__add'>
							<div className='frame__add'></div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
