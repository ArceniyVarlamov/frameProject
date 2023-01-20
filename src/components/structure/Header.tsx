import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCode } from "../../store/accountSlice";
import { IAccountState } from "./../../store/accountSlice";
import useAccountInfo from "../../hooks/info/useAccountInfo";

export default function Header() {
  const { code: isRegistered } = useAccountInfo();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
      }}
    >
      <div className='header'>
        <Link to='/' className='header__logo'></Link>
        <div className='header__create'>Create</div>
        <input type='text' placeholder='Search' />
        {!isRegistered && (
          <>
            <Link to='/registration' className='header__register'>
              Register
            </Link>
            <Link to='/' className='header__login'>
              Login
            </Link>
          </>
        )}
        {isRegistered && (
          <>
            <div className='header__notifications'></div>
            <div className='header__messages'></div>
            <div className='header__account'></div>
            <div className='header__accounts'></div>
          </>
        )}
      </div>
    </div>
  );
}
