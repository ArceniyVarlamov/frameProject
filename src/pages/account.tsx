import Frame from "../components/structure/Frame";
import Header from "../components/structure/Header";
import { useParams } from "react-router-dom";
import useAccountInfo from "../hooks/get/useAccountInfo";
import Collections from "../components/structure/Collections";
import AccountInfo from "../components/structure/AccountInfo";
import Loading from "../components/functional/Loading";
import useCheckIsRegistered from "../hooks/functions/useCheckIsRegistered";
import useAccountCollections from "../hooks/get/useAccountCollections";
import useFetchByScroll from "../hooks/functions/useFetchByScroll";

export default function AccountPage() {
	useCheckIsRegistered();

	const { username } = useParams();

	const { data: userData, load: userLoad } = useAccountInfo(username);
	const { collections: collectionsData, load: collectionsLoad } =
		useAccountCollections(1, 6, userData?.username);

	return (
		<>
			<Header />
			<Loading loading={userLoad}></Loading>
			<AccountInfo accountData={userData} />
			<Collections
				username={userData?.username}
				toShow={6}
				collectionsLoad={collectionsLoad}
				collectionsData={collectionsData}
			/>
		</>
	);
}
