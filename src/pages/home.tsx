import Main from "../components/structure/Main";
import Header from "../components/structure/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCode } from "../store/accountSlice";
import { useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "./../hooks/post/useRegisterUnsplash";

export default function HomePage() {
  

  return (
    <>
      <Header />
      {/* <Main /> */}
    </>
  );
}
