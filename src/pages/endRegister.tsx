import Header from "../components/structure/Header";
import useRegisterUnsplash from "../utils/registration/useRegisterUnsplash";
import { useSearchParams } from "react-router-dom";
import RegisterError from "../components/structure/RegisterError";
import RegisterSuccess from './../components/structure/RegisterSuccess';

export default function EndRegister() {
	const [params, setParams] = useSearchParams();

	const { accountData, accountError, accountLoading } = useRegisterUnsplash(
		params.get("code"),
	);

	return (
		<>
			<Header />
			{accountError && (
				<RegisterError
					accountError={accountError}
					accountLoading={accountLoading}
				/>
			)}
			{!accountError && (
				<RegisterSuccess
					accountLoading={accountLoading}
				/>
			)}
		</>
	);
}
