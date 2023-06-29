import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import Collections from "../components/structure/Collections";
import useCheckIsRegistered from '../hooks/functions/useCheckIsRegistered';

export default function CollectionsPage() {

  const { username = "" } = useParams();
  useCheckIsRegistered()
  
  return (
    <>
      <Header/>
      <Collections username={username} toShow={Infinity}/>
    </>
  )
}