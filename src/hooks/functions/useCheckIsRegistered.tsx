import { useState, useEffect } from "react";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import { Navigate, useNavigate } from "react-router-dom";

export default function useCheckIsRegistered() {
	const { isRegistered } = useAccountStoreInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (!!!isRegistered || !!!localStorage.getItem("refresh_token")) {
      
      navigate('/notregistered');
    }
  }, [isRegistered, navigate]);
}
