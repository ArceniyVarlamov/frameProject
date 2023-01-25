import Main from "../components/structure/Main";
import Header from "../components/structure/Header";
import { useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../utils/registration/useRegisterUnsplash";
import Loading from "../components/functional/Loading";

export default function HomePage() {

  const [params, setParams] = useSearchParams()

  const {accountData, accountError, accountLoading} = useRegisterUnsplash(params.get("code"))

  return  (
    <>
      <Header />
      {/* <Main /> */}
    </>
  )
}
