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
import useSearchFrames from "../hooks/get/useSearchPhotos";
import SearchParams from "./../components/structure/SearchParams";
import Collections from "../components/structure/Collections";

export default function SearchPage() {
	const [active, setActive] = useState("collections");

	const [searchParams] = useSearchParams();

	const { framesMainWidth } = useVariablesStoreInfo();

	useFetchByScroll();
	useCheckIsRegistered();

	const { colNum, lineNum } = useCountResize(framesMainWidth);
	// const { searchPerSearch } = useVariablesStoreInfo();

	const { frames: framesData, load: framesLoad } = useSearchFrames({
		perLoad: colNum * lineNum,
		q: searchParams.get("q"),
		post: active === "photos",
	});

	const { frames: collectionsData, load: collectionsLoad } = useSearchCollections({
		perLoad: 2,
		q: searchParams.get("q"),
		post: active === "collections",
	});

	return (
		<>
			<Header />
			<SearchParams
				active={active}
				setActive={setActive}
				framesData={framesData || collectionsData}
			></SearchParams>
			{active === "photos" && <Main
				frames={framesData.results}
				load={framesLoad}
				framesWidth={framesMainWidth}
			></Main>}
			{active === "collections" && <Collections
				toShow={Infinity}
				collectionsLoad={collectionsLoad}
				collectionsData={collectionsData?.results}
			/>}
		</>
	);
}
