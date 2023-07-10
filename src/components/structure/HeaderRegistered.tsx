import { Link, NavLink } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import useCheckRegister from "./../../utils/registration/useCheckRegister";
import Image from "./Image";
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from "react-redux";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";
import bell from "../../images/bell.png";
import mail from "../../images/mail.png";
import arrow from '../../images/Arrow-down.png'
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function HeaderRegistered() {
	const { accountInfo } = useAccountStoreInfo()

	const dispatch = useDispatch();

	return (
		<div className='header'>
			<div className='header__container '>
				<Image
					to='/'
					className='header__logo truncate'
					onClick={() => dispatch(addFramesRedirect())}
				></Image>
				<Link to='/create' className='header__create header__create-reg truncate'>
					Create
				</Link>
				<input
					type='text'
					placeholder='Search'
					className='truncate header__search'
				/>
				<div className='header__notifications'>
					<Image
						src={bell}
					></Image>
				</div>
				<div className='header__messages'>
					<Image
						src={mail}
					></Image>
				</div>
				<div className='header__account'>
					<Image to='/me' src={accountInfo?.profile_image?.medium} color={"var(--main-color)"}></Image>
				</div>

				<div className='header__accounts'>
					<Image
						src={arrow}
					></Image>
				</div>
			</div>
		</div>
	);
}
