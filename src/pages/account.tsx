import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import useAccountInfo from "../hooks/get/useAccountInfo";
import Collections from "../components/structure/Collections";
import AccountInfo from "../components/structure/AccountInfo";

export default function AccountPage() {

  const { username } = useParams();
  const { data, load } = useAccountInfo(username)
  
  return (
    <>
      <Header/>
      <AccountInfo accountData={data} />
			<Collections username={data?.username} toShow={6} />
    </>
  )
}