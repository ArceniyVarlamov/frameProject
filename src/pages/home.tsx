import Main from "../components/structure/Main";
import Header from "../components/structure/Header";
import { useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../utils/registration/useRegisterUnsplash";
import Loading from "../components/functional/Loading";
import useAccountInfo from './../utils/info/useAccountInfo';
import { useEffect } from "react";
import useCheckRegister from './../utils/registration/useCheckRegister';

export default function HomePage() {

  useCheckRegister()

  return  (
    <>
      <Header />
      <Main />
    </>
  )
}
