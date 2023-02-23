import { useSelector } from "react-redux";
import { IAccountState } from "../../store/accountSlice";

export default function useAccountInfo() {
  const { isRegistered, registeredWith, accessToken, links } = useSelector(
    (state: { account: IAccountState }) => state.account
  );
  
  return { isRegistered, registeredWith, accessToken, links };
}
