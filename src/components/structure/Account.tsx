import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useState } from "react";
import arrow from "../../images/Arrow-down.png";

export default function Account() {
	const { data, error, load } = useAccountCurrent();

	const [close, setClose] = useState(true);

	return (
		<div className='account'>
			<div className='account__about'>
				<div className='account__image'></div>
				<div className='account__info'>
					<div className='account__author'>
						<div className='account__username'>
							{conditional({ src: data.username, alt: "noname" })}
						</div>
						<div className='account__subscribe'>Subscribe</div>
					</div>
					<div className='account__numbers'>
						<div className='account__downloads'>
							{conditional({ src: data.downloads, alt: "0" })}{" "}
							<p>downloads</p>
						</div>
						<div className='account__subscribers'>
							{conditional({ src: data.followers_count, alt: "0" })}{" "}
							<p>subscribers</p>
						</div>
						<div className='account__subscriptions'>
							{conditional({ src: data.following_count, alt: "0" })}{" "}
							<p>subscriptions</p>
						</div>
					</div>
					<div className='account__bio'>
						{conditional({
							src: data.bio,
							slice: close ? 200 : undefined,
						})}
						{(data.bio ? data.bio.length : '') > 200 ? (
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
	);
}
