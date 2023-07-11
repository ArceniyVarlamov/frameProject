import Frame from "../components/structure/Frame";
import Header from "../components/structure/Header";
import { useParams } from "react-router-dom";
import Collection from "../components/structure/CollectionInfo";
import useCountResize from "../hooks/functions/useCountResize";
import useAccountCollectionPhotos from "../hooks/get/useAccountCollectionPhotos";
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

	const { dataCollectionPhotos, loadPhotos } = useAccountCollectionPhotos(
		id,
		colNum * lineNum,
	);

	return (
		<>
			<Header />
      <CollectionInfo id={id}></CollectionInfo>
			<Main framesWidth={framesCollectionsWidth} frames={dataCollectionPhotos} load={loadPhotos}/>
			<Loading loading={loadPhotos}></Loading>
		</>
	);
}
