import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { IAccountState } from "../../store/accountSlice";

export default function useAccountInfo() {
  const { isRegistered, registeredWith, accessToken } = useSelector(
    (state: { account: IAccountState }) => state.account
  );

  const [accountInfo, setAccountInfo] = useState(JSON.parse(localStorage.getItem('accountInfo') as string) as IAccountPublicData)
  
  return { isRegistered, registeredWith, accessToken, accountInfo };
}
