import Header from "../components/structure/Header";
import { useParams } from "react-router-dom";
import Collections from "../components/structure/Collections";
import useCheckIsRegistered from "../hooks/functions/useCheckIsRegistered";
import useAccountInfo from "../hooks/get/useAccountInfo";
import useAccountCollections from "../hooks/get/useAccountCollections";
import useFetchByScroll from "../hooks/functions/useFetchByScroll";
import useCountResize from "../hooks/functions/useCountResize";
import useVariablesStoreInfo from "../utils/info/useVariablesStoreInfo";

export default function CollectionsPage() {
	const { username = "" } = useParams();

	const { framesCollectionsWidth } = useVariablesStoreInfo();

  const {dataLoaded} = useFetchByScroll();

	const { colNum: colCollectionNum, lineNum: lineCollectionNum } = useCountResize(framesCollectionsWidth * 1.8);
	const { collections: collectionsData, load: collectionsLoad } =
	useAccountCollections(dataLoaded, colCollectionNum * lineCollectionNum, username);
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
