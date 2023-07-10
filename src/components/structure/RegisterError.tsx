import { Link, useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../../utils/registration/useRegisterUnsplash";
import Loading from "../functional/Loading";
import { AxiosError } from "axios";

export default function RegisterError() {
	return (
		<div className='registered'>
			<div className='registered__container'>
				<p className='registered__message'>
					An error occurred during registration
				</p>
				<Link className='registered__link underline' to='/registration'>
					Try again
				</Link>
			</div>
		</div>
	);
}
