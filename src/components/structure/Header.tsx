import { Link } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountInfo";
import useCheckRegister from "./../../utils/registration/useCheckRegister";
import Image from './Image';
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from "react-redux";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";

export default function Header() {

	const {meData: accountData, load} = useAccountCurrent()
	const { isRegistered } = useAccountInfo();

	const dispatch = useDispatch()
	
	return (
		<div className='header'>
			<div className='header__container'>
				<Link to='/' className='header__logo' onClick={() => dispatch(addFramesRedirect())}></Link>
				<div className='header__create truncate'>Create</div>
				<input
					type='text'
					placeholder='Search'
					className='truncate header__search'
				/>
				{!isRegistered && (
					<>
						<Link to='/registration' className='header__register truncate'>
							Register
						</Link>
						<Link to='/login' className='header__login truncate'>
							Login
						</Link>
					</>
				)}
				{isRegistered && (
					<>
						<div className='header__notifications'></div>
						<div className='header__messages'></div>
						<Link to='/me' className='header__account'>
            <Image className='header__img' src={accountData?.profile_image?.medium}></Image>
						</Link>
						<div className='header__accounts'></div>
					</>
				)}
			</div>
		</div>
	);
}
