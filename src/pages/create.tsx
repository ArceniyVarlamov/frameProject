import Header from "../components/structure/Header";
import { useParams } from "react-router-dom";
import Collections from "../components/structure/Collections";
import useAccountStoreInfo from "../utils/info/useAccountStoreInfo";
import NotRegistered from "../components/structure/NotRegistered";
import Create from "../components/structure/Create";
import useCheckIsRegistered from "../hooks/functions/useCheckIsRegistered";

export default function CreatePage() {
	useCheckIsRegistered()

	return (
		<>
      <Header/>
			<Create/>
		</>
	);
}
