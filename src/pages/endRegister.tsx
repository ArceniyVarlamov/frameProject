import Header from "../components/structure/Header";
import useRegisterUnsplash from "../utils/registration/useRegisterUnsplash";
import { useSearchParams } from "react-router-dom";
import RegisterError from "../components/structure/RegisterError";
import RegisterSuccess from './../components/structure/RegisterSuccess';
import Loading from "../components/functional/Loading";

export default function EndRegister() {
	const [params, setParams] = useSearchParams();

	const { accountData, accountLoading } = useRegisterUnsplash(
		params.get("code"),
	);

	return (
		<>
			<Header />
			<Loading loading={accountLoading}></Loading>
			{accountData && (
				<RegisterError
				/>
			)}
			{!accountData && (
				<RegisterSuccess
				/>
			)}
		</>
	);
}
