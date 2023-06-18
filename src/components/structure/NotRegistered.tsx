import { NavLink } from "react-router-dom";

export default function NotRegistered() {
	return (
		<div className='unregistered'>
			<p className='unregistered__message'>You are not registered yet</p>
			<NavLink to={"/registration"} className='unregistered__link underline'>
				register and return to this page
			</NavLink>
		</div>
	);
}
