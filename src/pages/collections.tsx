import Header from "../components/structure/Header";
import { useParams } from "react-router-dom";
import Collections from "../components/structure/Collections";
import useCheckIsRegistered from "../hooks/functions/useCheckIsRegistered";
import useAccountInfo from "../hooks/get/useAccountInfo";
import useAccountCollections from "../hooks/get/useAccountCollections";
import useFetchByScroll from "../hooks/functions/useFetchByScroll";

export default function CollectionsPage() {
	const { username = "" } = useParams();

  const {dataLoaded} = useFetchByScroll();

	const { collections: collectionsData, load: collectionsLoad } =
		useAccountCollections(dataLoaded, 6, username);
	useCheckIsRegistered();

	return (
		<>
			<Header />
			<Collections
				username={username}
				toShow={Infinity}
				collectionsLoad={collectionsLoad}
				collectionsData={collectionsData}
			/>
		</>
	);
}
