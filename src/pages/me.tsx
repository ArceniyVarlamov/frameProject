import AccountInfo from '../components/structure/AccountInfo';
import Header from '../components/structure/Header';
import useAccountCurrent from '../hooks/get/useAccountCurrent';
import Collections from '../components/structure/Collections';
import Loading from '../components/functional/Loading';

export default function MePage() {

  const {meData, load} = useAccountCurrent()

  return (
    <>
      <Header/>
      <Loading loading={load}></Loading>
      <AccountInfo accountData={meData} />
			<Collections username={meData?.username} toShow={6} />
    </>
  )
}