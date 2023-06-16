import AccountInfo from '../components/structure/AccountInfo';
import Header from '../components/structure/Header';
import useAccountCurrent from '../hooks/get/useAccountCurrent';
import Account from '../components/structure/Account';

export default function MePage() {

  const {meData, load} = useAccountCurrent()

  return (
    <>
      <Header/>
      <Account accountData={meData}/>
    </>
  )
}