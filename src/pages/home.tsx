import Main from "../components/structure/Main";
import Header from "../components/structure/Header";
import { useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../utils/registration/useRegisterUnsplash";
import Loading from "../components/functional/Loading";
import useAccountInfo from '../utils/info/useAccountStoreInfo';
import { useEffect } from "react";
import useCheckRegister from './../utils/registration/useCheckRegister';
import { useDispatch } from "react-redux";
import { addFramesRedirect } from "../store/framesSlice";

export default function HomePage() {

  useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

  return  (
    <>
      <Header />
      {/* <Main framesPerLoad={2} frameHeight={400} frameHeightDiffusion={100}></Main> */}
    </>
  )
}
