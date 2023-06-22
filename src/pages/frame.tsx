import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import Main from "../components/structure/Main";
import { useEffect } from "react";

export default function FramePage() {
  const { id = "" } = useParams();

  return (
    <>
      <Header/>
      <Frame id={id}/>
      <Main framesWidth={200}></Main>
    </>
  )
}