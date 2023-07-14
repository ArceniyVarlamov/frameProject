import Main from "../components/structure/Main";
import Header from "../components/structure/Header";
import { useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../utils/registration/useRegisterUnsplash";
import Loading from "../components/functional/Loading";
import useAccountInfo from "../utils/info/useAccountStoreInfo";
import { useCallback, useEffect, useState } from "react";
import useCheckRegister from "./../utils/registration/useCheckRegister";
import { useDispatch } from "react-redux";
import { addFramesRedirect } from "../store/framesSlice";
import useFetchByScroll from "../hooks/functions/useFetchByScroll";
import useFramesList from "../hooks/get/useFramesList";
import useVariablesStoreInfo from "../utils/info/useVariablesStoreInfo";
import useCountResize from "../hooks/functions/useCountResize";
import useSearchPhotos from "../hooks/get/useSearchPhotos";
import useCheckIsRegistered from "../hooks/functions/useCheckIsRegistered";
import useSearchCollections from "../hooks/get/useSearchCollections";

export default function SearchPage() {
	const [active, setActive] = useState("collections");

	const [searchParams] = useSearchParams();

	const { framesMainWidth } = useVariablesStoreInfo();

	useFetchByScroll();
	useCheckIsRegistered();

	const { colNum, lineNum } = useCountResize(framesMainWidth);
	// const { searchPerSearch } = useVariablesStoreInfo();

	const { frames: PhotosData, load: photosLoad } = useSearchPhotos({
		perLoad: colNum * lineNum,
		q: searchParams.get("q"),
		post: active === "photos",
	});

	const { frames: collectionsData, load: collectionsLoad } = useSearchCollections({
		perLoad: colNum * lineNum,
		q: searchParams.get("q"),
		post: active === "collections",
	});

	return (
		<>
			<Header />
			<div className='search'>
				<div className='search__choose'>
					<div
						className={`${active === "photos" ? "search__active" : ""}`}
						onClick={() => setActive("photos")}
					>
						Photos
					</div>
					<div
						className={`${active === "collections" ? "search__active" : ""}`}
						onClick={() => setActive("collections")}
					>
						Collections
					</div>
					<div
						className={`${active === "users" ? "search__active" : ""}`}
						onClick={() => setActive("users")}
					>
						Users
					</div>
				</div>
				<div className='search__info'>
					<p className='search__total'>
						{PhotosData?.total} {active}
					</p>
				</div>
			</div>
			<Main
				frames={PhotosData.results}
				load={photosLoad}
				framesWidth={framesMainWidth}
			></Main>
		</>
	);
}
