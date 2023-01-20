import { useSelector } from "react-redux";
import { IAccountState } from "../../store/accountSlice";

export default function useAccountInfo() {
  const { code } = useSelector(
    (state: { account: IAccountState }) => state.account
  );
  return { code };
}
