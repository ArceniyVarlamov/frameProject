import { Link, NavLink } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import useCheckRegister from "./../../utils/registration/useCheckRegister";
import Image from "./Image";
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from "react-redux";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";

export default function HeaderDefault() {
	const dispatch = useDispatch();

	return (
		<div className='header'>
			<div className='header__container '>
				<Link
					to='/'
					className='header__logo truncate'
					onClick={() => dispatch(addFramesRedirect())}
				></Link>
				<Link to='/create' className='header__create truncate'>
					Create
				</Link>
				<input
					type='text'
					placeholder='Search'
					className='truncate header__search'
				/>
				<Link to='/registration' className='header__register truncate'>
					Register
				</Link>
				<Link to='/login' className='header__login truncate'>
					Login
				</Link>
			</div>
		</div>
	);
}
