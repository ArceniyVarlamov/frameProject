import { Link, NavLink } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import useCheckRegister from "./../../utils/registration/useCheckRegister";
import Image from "./Image";
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from "react-redux";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";

export default function HeaderRegistered() {
	const { meData: accountData, load } = useAccountCurrent();

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
				<div className='header__notifications'></div>
				<div className='header__messages'></div>
				<Link to='/me' className='header__account'>
					<Image
						className='header__img'
						src={accountData?.profile_image?.medium}
					></Image>
				</Link>
				<div className='header__accounts'></div>
			</div>
		</div>
	);
}
