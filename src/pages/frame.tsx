import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';

export default function FramePage() {
  const { id = "" } = useParams();
  return (
    <>
      <Header/>
      <Frame id={id}/>
    </>
  )
}