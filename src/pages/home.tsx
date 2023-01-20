import Main from "../components/structure/Main";
import Header from "../components/structure/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCode } from "../store/accountSlice";
import { useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "./../hooks/post/useRegisterUnsplash";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { accountData, accountError } = useRegisterUnsplash(
    searchParams.get("code"),
  );

  console.log(accountData, accountError);
  

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
