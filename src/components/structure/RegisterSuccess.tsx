import { Link, useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../../utils/registration/useRegisterUnsplash";
import Loading from "../functional/Loading";

export default function RegisterSuccess({
	accountLoading,
}: {
	accountLoading: boolean;
}) {
	
	return (
		<div className='registered'>
			<Loading loading={accountLoading}></Loading>
			<p className='registered__message'>Registration completed successfully</p>
			<Link className='registered__link' to='/'>
				Back to main page
			</Link>
		</div>
	);
}