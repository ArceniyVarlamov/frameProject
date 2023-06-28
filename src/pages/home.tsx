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

export default function HomePage() {
	const { framesMainWidth } = useVariablesStoreInfo();

	// Событие подзагрузки фреймов при скролле
	useFetchByScroll();

	// Считает количество столбов и строк, которые будут на странице с определённым размером окна
	const { colNum, lineNum } = useCountResize(framesMainWidth);

	const { frames, load } = useFramesList(colNum * lineNum);

	return (
		<>
			<Header />
			{/* <Main frames={frames} load={load} framesWidth={framesMainWidth}></Main> */}
		</>
	);
}
