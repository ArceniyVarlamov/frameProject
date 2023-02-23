import useAccountFollowing from "../../hooks/get/useAccountFollowing";
import search from "../../images/search.png";
import cross from "../../images/cross.png";
import conditional from "./../../utils/functional/condition";
import Loading from "../functional/Loading";
import Error from "./../functional/Error";
import useAccountFollowers from "./../../hooks/get/useAccontFollowers";
import { useRef } from "react";
import useAccountCollections from './../../hooks/get/useAccountCollections';
import Image from './Image';

export default function Following({
	username,
	following,
	show,
	setShow,
	setFollowing,
}: {
	username?: string | null;
	following: boolean;
	show: boolean;
	setShow: any;
	setFollowing: any;
}) {
	const {
		data: followingData,
		error: followingError,
		load: followingLoad,
	} = useAccountFollowing(username);

	const {
		data: followersData,
		error: followersError,
		load: followersLoad,
	} = useAccountFollowers(username);

	const followersRef = useRef<HTMLDivElement>(null);
	const followingRef = useRef<HTMLDivElement>(null);

	const followersClick = (e: React.MouseEvent<HTMLElement>) => {
		setFollowing(false);
		followersRef?.current?.classList.add("following__slide-in");
		followingRef?.current?.classList.remove("following__slide-in");
		followersRef?.current?.classList.remove("following__slide-out");
		followingRef?.current?.classList.add("following__slide-out");
	};

	const followingClick = (e: React.MouseEvent<HTMLElement>) => {
		console.log("safasffsaf", followersRef, followersRef);

		setFollowing(true);
		followersRef?.current?.classList.remove("following__slide-in");
		followingRef?.current?.classList.add("following__slide-in");
		followersRef?.current?.classList.add("following__slide-out");
		followingRef?.current?.classList.remove("following__slide-out");
	};

	return show ? (
		<div className='following'>
			<div className='following__container'>
				<div className='following__back' onClick={() => setShow(false)}>
					<img src={cross} alt='cross' />
				</div>
				<div className='following__find'>
					<input className='following__input'></input>
					<div className='following__search'>
						<img src={search} alt='search' />
					</div>
				</div>
				<div className='following__switch'>
					{following ? (
						<>
							<div
								className='following__followers following__slide-out'
								onClick={followersClick}
								ref={followersRef}
							>
								Subscribers
							</div>
							<div
								className='following__following following__slide-in'
								onClick={followingClick}
								ref={followingRef}
							>
								Subscriptions
							</div>
						</>
					) : (
						<>
							<div
								className='following__followers following__slide-in'
								onClick={followersClick}
								ref={followersRef}
							>
								Subscribers
							</div>
							<div
								className='following__following following__slide-out'
								onClick={followingClick}
								ref={followingRef}
							>
								Subscriptions
							</div>
						</>
					)}
				</div>
				<div className='following__users'>
					{following
						? followingData.map((item) => {
								return (
									<div className='following__user' key={item.id}>
										<Loading loading={followingLoad}></Loading>
										<Error err={followingError}></Error>
										<div className='following__img'>
											<Image src={item?.profile_image.medium}></Image>
										</div>
										<div className='following__info'>
											<div className='following__username'>
												{conditional({
													src: item?.username,
													slice: 20,
												})}
											</div>
											<div className='following__bio'>
												{conditional({
													src: item?.bio,
													alt: "frame user",
													slice: 20,
												})}
											</div>
										</div>
										<div className='following__subscribe'>Subscribe</div>
									</div>
								);
						  })
						: followersData.map((item) => {
								return (
									<div className='following__user' key={item.id}>
										<Loading loading={followersLoad}></Loading>
										<Error err={followersError}></Error>
										<div className='following__img'>
											<Image src={item?.profile_image.medium}></Image>
										</div>
										<div className='following__info'>
											<div className='following__username'>
												{conditional({
													src: item?.username,
													slice: 20,
												})}
											</div>
											<div className='following__bio'>
												{conditional({
													src: item?.bio,
													alt: "frame user",
													slice: 20,
												})}
											</div>
										</div>
										<div className='following__subscribe'>Subscribe</div>
									</div>
								);
						  })}
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}
