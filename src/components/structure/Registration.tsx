import unsplashImg from "../../images/unsplash.png";
import googleImg from "../../images/google.png";
import emailImg from "../../images/email.png";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className='registration'>
      <div className='registration__form'>
        <div className='registration__head'>Register with:</div>
        <Link to="/email">
          <p>Email</p>
          <img src={emailImg} alt="email"/>
        </Link>
        <a>
          <p>Google</p>
          <img src={googleImg} alt="google"/>
        </a>
        <a>
          <p></p>
          <img src={unsplashImg} alt=""/>
        </a>
        <a href="https://unsplash.com/oauth/authorize?client_id=zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q&redirect_uri=http://localhost:3000/&response_type=code&scopes=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections" className='registration__unsplash'>
          <p>Unsplash</p>
          <img src={unsplashImg} alt="unsplash" />
        </a>
      </div>
    </div>
  );
}
