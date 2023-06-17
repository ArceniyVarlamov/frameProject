import unsplashImg from "../../images/unsplash.png";
import googleImg from "../../images/google.png";
import emailImg from "../../images/email.png";
import { Link, NavLink } from "react-router-dom";
import useMetaData from "../../utils/info/useMetaData";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function NotRegistered({ up }: { up: boolean }) {
	const { isRegistered } = useAccountStoreInfo();

	return isRegistered ? (
		<></>
	) : (
		<div className='unregistered'>
			<p>You are not registered yet</p>
			<NavLink to={"/registration"}>register and return to this page</NavLink>
		</div>
	);
}
