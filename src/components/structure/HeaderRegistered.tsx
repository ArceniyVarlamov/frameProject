import { Link, NavLink, useNavigate } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import useCheckRegister from "./../../utils/registration/useCheckRegister";
import Image from "./Image";
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from "react-redux";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";
import bell from "../../images/bell.png";
import mail from "../../images/mail.png";
import arrow from "../../images/Arrow-down.png";
import search from "../../images/search.png";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import { Key, useEffect, useState } from "react";
import useVariablesStoreInfo from "../../utils/info/useVariablesStoreInfo";
import useSearchPhotos from "../../hooks/get/useSearchPhotos";
import { ISearchPhotos } from "../../interface";

export default function HeaderRegistered({headerValue = ''}: {headerValue: string}) {
	const dispatch = useDispatch();

	const [q, setQ] = useState(headerValue);

	const { accountInfo } = useAccountStoreInfo();

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
				<Link
					to='/create'
					className='header__create header__create-reg truncate'
				>
					Create
				</Link>
				<div className='header__search'>
					<input value={q} className='truncate header__search-input' onChange={inputHandler} type='text' placeholder='Search' />
					<Image className='header__search-img' src={search} onClick={searchHandler}></Image>
				</div>
				<div className='header__notifications'>
					<Image src={bell}></Image>
				</div>
				<div className='header__messages'>
					<Image src={mail}></Image>
				</div>
				<div className='header__account'>
					<Image
						to='/me'
						src={accountInfo?.profile_image?.medium}
						color={"var(--main-color)"}
					></Image>
				</div>

				<div className='header__accounts'>
					<Image src={arrow}></Image>
				</div>
			</div>
		</div>
	);
}
