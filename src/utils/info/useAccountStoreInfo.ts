import { useSelector } from "react-redux";
import { IAccountState } from "../../store/accountSlice";

export default function useAccountStoreInfo() {
  const { isRegistered, registeredWith, accessToken, accountData } = useSelector(
    (state: { account: IAccountState }) => state.account
  );
  
  return { isRegistered, registeredWith, accessToken, accountData };
}
