import { Frame } from "../components/structure/Frame";
import { Main } from "../components/structure/Main"
import { Header } from '../components/structure/Header';
import { useParams } from 'react-router-dom';

export function FramePage() {
  const { id = "" } = useParams();
  return (
    <>
      <Header/>
      <Frame id={id}/>
    </>
  )
}