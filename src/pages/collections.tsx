import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import Collections from "../components/structure/Collections";

export default function CollectionsPage() {

  const { username = "" } = useParams();
  
  return (
    <>
      <Header/>
      <Collections username={username} toShow={Infinity}/>
    </>
  )
}