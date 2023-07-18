import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import { Link } from "react-router-dom";
import Loading from "../functional/Loading";
import { IAccountCollection, ICollectionsFrame, IData } from "../../interface";
import plus from "../../images/plus.png";
import cross from "../../images/black_bold_cross.png";
import { useEffect, useRef, useState } from "react";
import useAddPhotoToCollections from "../../hooks/post/useAddPhotoToCollection";
import useFetchByScroll from "../../hooks/functions/useFetchByScroll";

export default function CollectionAdd({
	username,
	className = "",
	frameId,
	show,
	setShow,
}: {
	username: string | null | undefined;
	className?: string;
	frameId: string | undefined;
	show: boolean,
	setShow: (value: boolean) => void;
}) {

	
	const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null)

	const { dataLoaded } = useFetchByScroll(scrollRef);

	const { collections, load } = useAccountCollections(dataLoaded, 6, username);
	
	const [post, setPost] = useState(false);
	const [collectionId, setCollectionId] = useState<string | null | undefined>();

	const { dataCollection, load: loadCollection } = useAddPhotoToCollections(
		collectionId,
		frameId,
		post,
		setPost,
	);

	return (
		<>
			{show && (
				<>
					<Loading loading={load}></Loading>
					<div className={`collection-add ${className}`}>
						<div className='collection-add__container'>
							<Image
								className='collection-add__back'
								src={cross}
								onClick={() => setShow(false)}
							></Image>
							<div className='collection-add__title'>Collections</div>
							<div ref={(element) => setScrollRef(element)} className='collection-add__collections'>
								{collections?.map((item, i) => {
									return (
										<div className='collection-add__collection'>
											<div className='collection-add__info'>
												<Image
													className='collection-add__image'
													src={item?.cover_photo?.urls?.regular}
												></Image>
												<div className='collection-add__name'>
													{item?.title}
												</div>
											</div>

											<div
												className='collection-add__save'
												onClick={() => {
													setCollectionId(item?.id);
													setPost(true);
													setShow(false)
												}}
											>
												<Image src={plus}></Image>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
