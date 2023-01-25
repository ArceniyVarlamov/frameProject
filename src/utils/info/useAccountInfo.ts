import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAccountState, setIsRegistered } from "../../store/accountSlice";

export default function useAccountInfo() {
  const { isRegistered, accessToken } = useSelector(
    (state: { account: IAccountState }) => state.account
  );
  return { isRegistered, accessToken };
}
