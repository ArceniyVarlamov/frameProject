import { Link } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountInfo";
import useCheckRegister from "./../../utils/registration/useCheckRegister";
import Image from './Image';

export default function Header() {

	const { isRegistered, accountInfo } = useAccountInfo();
	
	

	return (
		<div className='header'>
			<div className='header__container'>
				<Link to='/' className='header__logo'></Link>
				<div className='header__create truncate'>Create</div>
				<input
					type='text'
					placeholder='Search'
					className='truncate header__search'
				/>
				{!accountInfo && (
					<>
						<Link to='/registration' className='header__register truncate'>
							Register
						</Link>
						<Link to='/login' className='header__login truncate'>
							Login
						</Link>
					</>
				)}
				{accountInfo && (
					<>
						<div className='header__notifications'></div>
						<div className='header__messages'></div>
						<Link to='/me' className='header__account'>
            <Image className='header__img' src={accountInfo?.profile_image.medium}></Image>
						</Link>
						<div className='header__accounts'></div>
					</>
				)}
			</div>
		</div>
	);
}
