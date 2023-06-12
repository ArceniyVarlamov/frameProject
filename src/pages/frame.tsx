import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import Main from "../components/structure/Main";
import { useEffect } from "react";

export default function FramePage() {
  const { id = "" } = useParams();

  useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

  return (
    <>
      <Header/>
      <Frame id={id}/>
      {/* <Main framesPerLoad={2} frameHeight={400} frameHeightDiffusion={100}></Main> */}
    </>
  )
}