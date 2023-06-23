import AccountInfo from '../components/structure/AccountInfo';
import Header from '../components/structure/Header';
import useAccountCurrent from '../hooks/get/useAccountCurrent';
import Collections from '../components/structure/Collections';

export default function MePage() {

  const {meData, load} = useAccountCurrent()

  return (
    <>
      <Header/>
      <AccountInfo accountData={meData} />
			<Collections username={meData?.username} toShow={6} />
    </>
  )
}