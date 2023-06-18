import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import Account from './../components/structure/Account';
import Collection from './../components/structure/Collection';

export default function CollectionPage() {

  const { id } = useParams();
  
  return (
    <>
      <Header/>
      <Collection id={id} frameHeight={400}/>
    </>
  )
}