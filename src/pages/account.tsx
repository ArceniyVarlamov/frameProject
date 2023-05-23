import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import Account from './../components/structure/Account';

export default function AccountPage() {

  const { username = "" } = useParams();
  
  return (
    <>
      <Header/>
      <Account username={username}/>
    </>
  )
}