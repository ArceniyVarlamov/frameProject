import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useEffect, useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import Collections from "./Collections";

export default function Account({ className }: { className?: string }) {
	const { data, error, load } = useAccountCurrent();

	const [close, setClose] = useState(true);
	const [showFollowing, setShowFollowing] = useState(false);
	const [following, setFollowing] = useState(true);

	return (
		<>
			<div className={`account ${className}`}>
				<Following
					username={data?.username}
					setFollowing={setFollowing}
					following={following}
					show={showFollowing}
					setShow={setShowFollowing}
				></Following>
				<div className='account__about'>
					<Image
						className='account__image'
						src={data?.profile_image?.medium}
					></Image>
					<div className='account__info'>
						<div className='account__author'>
							<div className='account__username truncate'>
								{conditional({ src: data?.username, alt: "noname" })}
							</div>
							<div className='account__subscribe truncate'>Subscribe</div>
						</div>
						<div className='account__numbers'>
							<div className='account__downloads truncate'>
								{conditional({ src: data?.downloads, alt: "0" })}{" "}
								<p>downloads</p>
							</div>
							<div
								className='account__subscribers truncate'
								onClick={() => {
									setShowFollowing(!showFollowing);
									setFollowing(false);
								}}
							>
								{conditional({ src: data?.followers_count, alt: "0" })}
								<p>subscribers</p>
							</div>
							<div
								className='account__subscriptions truncate'
								onClick={() => {
									setShowFollowing(!showFollowing);
									setFollowing(true);
								}}
							>
								{conditional({ src: data?.following_count, alt: "0" })}
								<p>subscriptions</p>
							</div>
						</div>
						<div className='account__bio'>
							{conditional({
								src: data?.bio,
								slice: close ? 200 : undefined,
							})}
							{(data?.bio ? data?.bio.length : "") > 200 ? (
								<img
									src={arrow}
									onClick={() => setClose(!close)}
									className={close ? "account__bio-close" : "account__bio-open"}
									alt='>'
								></img>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</div>
			<Collections username={data?.username}></Collections>
		</>
	);
}
