import unsplashImg from "../../images/unsplash.png";
import googleImg from "../../images/google.png";
import emailImg from "../../images/email.png";
import { Link } from "react-router-dom";
import useMetaData from "../../utils/info/useMetaData";

export default function Sign({ up }: { up: boolean }) {
  const { app, unsplash } = useMetaData();

  return up ? (
    <div className='sign'>
      <div className='sign__form'>
        <div className='sign__head'>Register with:</div>
        <Link to='/email/signup' className='sign__support'>
          <p>Email</p>
          <img src={emailImg} alt='email' />
        </Link>
        <a className='sign__support'>
          <p>Google</p>
          <img src={googleImg} alt='google' />
        </a>
        <a
          href={`https://unsplash.com/oauth/authorize?client_id=${unsplash.ACCESS_KEY}&redirect_uri=${app.URL}&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections`}
          className='sign__support'
        >
          <p>Unsplash</p>
          <img src={unsplashImg} alt='unsplash' />
        </a>
        <Link to='/login' className='sign__except'>
          Already registered? Sign in
        </Link>
      </div>
    </div>
  ) : (
    <div className='sign'>
      <div className='sign__form'>
        <div className='sign__head'>Login with:</div>
        <Link to='/email/signin' className='sign__support'>
          <p>Email</p>
          <img src={emailImg} alt='email' />
        </Link>
        <a className='sign__support'>
          <p>Google</p>
          <img src={googleImg} alt='google' />
        </a>
        <a
          href='https://unsplash.com/oauth/authorize?client_id=zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q&redirect_uri=http://localhost:3000/&response_type=code&scopes=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections'
          className='sign__support'
        >
          <p>Unsplash</p>
          <img src={unsplashImg} alt='unsplash' />
        </a>
        <Link to='/registration' className='sign__except'>
          You don't have account? Sign up
        </Link>
      </div>
    </div>
  );
}
