import Frame from "../components/structure/Frame";
import Header from '../components/structure/Header';
import { useParams } from 'react-router-dom';
import useAccountInfo from "../hooks/get/useAccountInfo";
import Collections from "../components/structure/Collections";
import AccountInfo from "../components/structure/AccountInfo";
import Loading from "../components/functional/Loading";

export default function AccountPage() {

  const { username } = useParams();
  const { data, load } = useAccountInfo(username)
  
  return (
    <>
      <Header/>
      <Loading loading={load}></Loading>
      <AccountInfo accountData={data} />
			<Collections username={data?.username} toShow={6} />
    </>
  )
}