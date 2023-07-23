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
import { IAccountPublicData, ISearchCollections, ISearchUsers } from "../interface";
import useSearchUsers from "../hooks/get/useSearchUsers";
import Users from "../components/structure/Users";

export default function SearchPage() {
	const [active, setActive] = useState("users");

	const [searchParams] = useSearchParams();

	const { framesMainWidth, framesCollectionsWidth } = useVariablesStoreInfo();

	//TODO Сделать возможность обнуления счётчика, то есть для каждого хука будет свой useState
	const { dataLoaded, setDataLoaded } = useFetchByScroll();
	// useCheckIsRegistered();

	const { colNum: colFramesNum, lineNum: lineFramesNum } =
		useCountResize(framesMainWidth);
	const { colNum: colCollectionNum, lineNum: lineCollectionNum } =
		useCountResize(framesCollectionsWidth);

	const { frames, load: framesLoad } = useSearchFrames({
		page: dataLoaded,
		perLoad: colFramesNum * lineFramesNum,
		q: searchParams.get("q"),
		post: active === "photos",
	});

	const { collections, load: collectionsLoad } = useSearchCollections({
		page: dataLoaded,
		perLoad: colCollectionNum * lineCollectionNum,
		q: searchParams.get("q"),
		post: active === "collections",
	});

	const { users, load: usersLoad } = useSearchUsers({
		page: dataLoaded,
		perLoad: 6,
		q: searchParams.get("q"),
		post: active === "users",
	});

	return (
		<>
			<Header />
			<SearchParams
				// Нужно чтобы обнулять счётчик
				setDataLoaded={setDataLoaded}
				active={active}
				setActive={setActive}
				framesData={frames || collections || users}
			></SearchParams>
			{active === "photos" && (
				<Main
					frames={frames.results}
					load={framesLoad}
					framesWidth={framesMainWidth}
				></Main>
			)}
			{active === "collections" && (
				<Collections
					toShow={Infinity}
					collectionsLoad={collectionsLoad}
					collectionsData={collections?.results}
				/>
			)}
			{active === "users" && (
				<Users
					toShow={Infinity}
					usersLoad={usersLoad}
					usersData={users?.results}
				/>
			)}
		</>
	);
}
