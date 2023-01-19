import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCode } from "../../store/accountSlice";

export default function Header() {

  const dispatch = useDispatch()

  const { code } = useParams()

  useEffect(() => {
    if (code) {
      dispatch(setCode(code))
    }
  }, [code]);

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
        {!code && (
          <>
            <Link to='/registration' className='header__register'>
              Register
            </Link>
            <Link to='/' className='header__login'>
              Login
            </Link>
          </>
        )}
        {code && (
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
