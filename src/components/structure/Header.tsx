import { Link } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountInfo";

export default function Header() {
  const { isRegistered } = useAccountInfo();

  return (
    <div className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo'></Link>
        <div className='header__create'>Create</div>
        <input type='text' placeholder='Search' />
        {!isRegistered && (
          <>
            <Link to='/registration' className='header__register'>
              Register
            </Link>
            <Link to='/login' className='header__login'>
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
