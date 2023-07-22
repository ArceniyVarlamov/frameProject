import { Link, NavLink, useNavigate } from "react-router-dom";
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
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function HeaderDefault({headerValue = ''}: {headerValue: string}) {
	const dispatch = useDispatch();

	const [q, setQ] = useState(headerValue);

	const { accountData } = useAccountStoreInfo();

	const navigate = useNavigate();

	window.onkeydown = (e: KeyboardEvent) => {
			if (e.key === "Enter" && !!q) {
				navigate(`/search?q=${q}`);
			}
	};

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQ(e.target.value);
	};

  const searchHandler = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!!q) {
            navigate(`/search?q=${q}`);
        }
	};

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
					<input value={q} onChange={inputHandler} className='truncate header__search-input' type='text' placeholder='Search' />
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
