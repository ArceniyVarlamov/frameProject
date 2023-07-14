import { Link, NavLink } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import useCheckRegister from "./../../utils/registration/useCheckRegister";
import Image from "./Image";
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from "react-redux";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";
import { useState } from "react";
import useSearchPhotos from "../../hooks/get/useSearchPhotos";
import useVariablesStoreInfo from "../../utils/info/useVariablesStoreInfo";
import search from "../../images/search.png";

export default function HeaderDefault() {
	const dispatch = useDispatch();

	return (
		<div className='header'>
			<div className='header__container '>
				<Image
					to='/'
					className='header__logo truncate'
					onClick={() => dispatch(addFramesRedirect())}
				></Image>
				<Link to='/create' className='header__create truncate'>
					Create
				</Link>
				<div className='header__search'>
					<input className='truncate header__search-input' type='text' placeholder='Search' />
					<Image className='header__search-img' src={search}></Image>
				</div>
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
