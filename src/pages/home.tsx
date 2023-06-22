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

  return  (
    <>
      <Header />
      <Main framesWidth={200}></Main>
    </>
  )
}
