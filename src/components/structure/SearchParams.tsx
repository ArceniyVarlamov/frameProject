import unsplashImg from "../../images/unsplash.png";
import googleImg from "../../images/google.png";
import emailImg from "../../images/email.png";
import { Link } from "react-router-dom";
import useMetaData from "../../utils/info/useMetaData";
import { ISearchFrames } from "../../interface";

export default function SearchParams({
	active,
	setActive,
	framesData,
	setDataLoaded,
}: {
	setDataLoaded: (value: number) => void;
	active: string;
	setActive: (value: string) => void;
	framesData: ISearchFrames;
}) {
	return (
		<div className='search'>
			<div className='search__choose'>
				<div
					className={`${active === "photos" ? "search__active" : ""}`}
					onClick={() => {setActive("photos"); setDataLoaded(1)}}
				>
					Photos
				</div>
				<div
					className={`${active === "collections" ? "search__active" : ""}`}
					onClick={() => {setActive("collections"); setDataLoaded(1)}}
				>
					Collections
				</div>
				<div
					className={`${active === "users" ? "search__active" : ""}`}
					onClick={() => {setActive("users"); setDataLoaded(1)}}
				>
					Users
				</div>
			</div>
			<div className='search__info'>
				<p className='search__total'>
					{framesData?.total} {active}
				</p>
			</div>
		</div>
	);
}
