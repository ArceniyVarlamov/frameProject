import AccountInfo from "../components/structure/AccountInfo";
import Header from "../components/structure/Header";
import useAccountCurrent from "../hooks/get/useAccountCurrent";
import Collections from "../components/structure/Collections";
import Loading from "../components/functional/Loading";
import useAccountStoreInfo from "../utils/info/useAccountStoreInfo";
import useAccountCollections from "../hooks/get/useAccountCollections";

export default function MePage() {
	const { accountData } = useAccountStoreInfo();
	
  const { collections: collectionsData, load: collectionsLoad } =
		useAccountCollections(1, 6, accountData?.username);

	return (
		<>
			<Header />
			<AccountInfo me={true} accountData={accountData} />
			<Collections
				username={accountData?.username}
				toShow={6}
				collectionsLoad={collectionsLoad}
				collectionsData={collectionsData}
			/>
		</>
	);
}
