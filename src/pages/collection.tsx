import Frame from "../components/structure/Frame";
import Header from "../components/structure/Header";
import { useParams } from "react-router-dom";
import Collection from "../components/structure/CollectionInfo";
import useCountResize from "../hooks/functions/useCountResize";
import useAccountCollectionPhotoes from "../hooks/get/useAccountCollectionPhotoes";
import Main from "../components/structure/Main";
import useFetchByScroll from "../hooks/functions/useFetchByScroll";
import CollectionInfo from "../components/structure/CollectionInfo";
import useVariablesStoreInfo from "../utils/info/useVariablesStoreInfo";
import Loading from "../components/functional/Loading";
import useCheckIsRegistered from "../hooks/functions/useCheckIsRegistered";

export default function CollectionPage() {
	const { id } = useParams();

	const { framesCollectionsWidth } = useVariablesStoreInfo();

  useFetchByScroll();
	useCheckIsRegistered()

	const { colNum, lineNum } = useCountResize(framesCollectionsWidth);

	const { dataCollectionPhotos, loadPhotoes } = useAccountCollectionPhotoes(
		id,
		colNum * lineNum,
	);

	return (
		<>
			<Header />
      <CollectionInfo id={id}></CollectionInfo>
			<Main framesWidth={framesCollectionsWidth} frames={dataCollectionPhotos} load={loadPhotoes}/>
			<Loading loading={loadPhotoes}></Loading>
		</>
	);
}
