import { Link, useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../../utils/registration/useRegisterUnsplash";
import Loading from "../functional/Loading";

export default function EndRegister() {
	const [params, setParams] = useSearchParams();

	const { accountData, accountError, accountLoading } = useRegisterUnsplash(
		params.get("code"),
	);

	return accountError ? (
		<div className='registered'>
			<Loading loading={accountLoading}></Loading>
			<p className='registered__message'>{accountError.toString()}</p>
			<Link className='registered__link' to='/registration'>
				Try again
			</Link>
		</div>
	) : (
		<div className='registered'>
			<Loading loading={accountLoading}></Loading>
			<p className='registered__message'>registration completed successfully</p>
			<Link className='registered__link' to='/'>
				Back to main page
			</Link>
		</div>
	);
}
