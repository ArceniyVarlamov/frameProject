import { Link } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from "react-redux";
import HeaderDefault from "./HeaderDefault";
import HeaderRegistered from "./HeaderRegistered";

export default function Header({headerValue = ''}: {headerValue?: string}) {
	const { isRegistered } = useAccountInfo();

	return (
		<>
			{!!!isRegistered && <HeaderDefault />}
			{!!isRegistered && <HeaderRegistered headerValue={headerValue}/>}
		</>
	);
}
