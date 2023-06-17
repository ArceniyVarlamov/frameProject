import { Link, useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../../utils/registration/useRegisterUnsplash";
import Loading from "../functional/Loading";
import { AxiosError } from "axios";

export default function RegisterError({
	accountError,
	accountLoading,
}: {
	accountError: any;
	accountLoading: boolean;
}) {

	return (
		<div className='registered'>
			<Loading loading={accountLoading}></Loading>
			<p className='registered__message'>{accountError.toString()}</p>
			<Link className='registered__link' to='/registration'>
				Try again
			</Link>
		</div>
	);
}
