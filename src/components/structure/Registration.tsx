import unsplashImg from "../../images/unsplash.png";

export default function Registration() {
  return (
    <div className='registration'>
      <div className='registration__form'>
        <div className='registration__head'>Register with:</div>
        <a href="https://unsplash.com/oauth/authorize?client_id=zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q&redirect_uri=http://localhost:3000/&response_type=code&scopes=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections" className='registration__unsplash'>
          <p>Unsplash</p>
          <img src={unsplashImg} alt="unsplash" />
        </a>
      </div>
    </div>
  );
}
