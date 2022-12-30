import { Frame } from "../components/Frame";
import { Main } from "../components/Main"
import { Header } from './../components/Header';
import { useParams } from 'react-router-dom';

export function FramePage() {
  const { id = "" } = useParams();
  return (
    <>
      <Header/>
      <Frame id={id}/>
      <Main/>
    </>
  )
}