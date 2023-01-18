import unsplashImg from "../../images/unsplash.png";

export default function Registration() {
  return (
    <div className='registration'>
      <div className='registration__form'>
        <div className='registration__head'>Register with:</div>
        <div className='registration__unsplash'>
          <p>Unsplash</p>
          <img src={unsplashImg} alt="unsplash" />
        </div>
      </div>
    </div>
  );
}
