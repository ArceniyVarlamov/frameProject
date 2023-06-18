import Header from "../components/structure/Header";
import { useParams } from "react-router-dom";
import Collections from "../components/structure/Collections";
import useAccountStoreInfo from "../utils/info/useAccountStoreInfo";
import NotRegistered from "../components/structure/NotRegistered";

export default function CreatePage() {
	const { isRegistered } = useAccountStoreInfo();

	return (
		<>
      <Header/>
			{isRegistered && <></>}
			{!isRegistered && <NotRegistered />}
		</>
	);
}
