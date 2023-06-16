import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import Account from './../components/structure/Account';
import useAccountInfo from "../hooks/get/useAccountInfo";

export default function AccountPage() {

  const { username } = useParams();
  const { data, load } = useAccountInfo(username)
  
  return (
    <>
      <Header/>
      <Account accountData={data}/>
    </>
  )
}