import AccountInfo from '../components/structure/AccountInfo';
import Header from '../components/structure/Header';
import useAccountCurrent from '../hooks/get/useAccountCurrent';
import Collections from '../components/structure/Collections';
import Loading from '../components/functional/Loading';
import useAccountStoreInfo from '../utils/info/useAccountStoreInfo';

export default function MePage() {

  const { accountInfo } = useAccountStoreInfo()

  return (
    <>
      <Header/>
      <AccountInfo me={true} accountData={accountInfo} />
			<Collections username={accountInfo?.username} toShow={6} />
    </>
  )
}