import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import Main from "../components/structure/Main";
import useFetchByScroll from "../hooks/functions/useFetchByScroll";
import useCountResize from "../hooks/functions/useCountResize";
import useFramesList from "../hooks/get/useFramesList";
import useVariablesStoreInfo from "../utils/info/useVariablesStoreInfo";

export default function FramePage() {
  const { id = "" } = useParams();

  const { framesMainWidth } = useVariablesStoreInfo();

  // Событие подзагрузки фреймов при скролле
	useFetchByScroll();

  // Считает количество столбов и строк, которые будут на странице с определённым размером окна
  const {colNum, lineNum} = useCountResize(framesMainWidth)

	const { frames, load } = useFramesList(colNum * lineNum);

  return (
    <>
      <Header/>
      <Frame id={id}/>
      {/* <Main framesWidth={framesMainWidth} frames={frames} load={load}></Main> */}
    </>
  )
}