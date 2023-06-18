import unsplashImg from "../../images/unsplash.png";
import googleImg from "../../images/google.png";
import emailImg from "../../images/email.png";
import { Link } from "react-router-dom";
import useMetaData from "../../utils/info/useMetaData";

export default function SignIn() {

	return (
		<div className='sign'>
			<div className='sign__form'>
				<div className='sign__head'>Login with:</div>
				<Link to='/email/signin' className='sign__support'>
					<p>Email</p>
					<img src={emailImg} alt='email' />
				</Link>
				<a href='/' className='sign__support'>
					<p>Google</p>
					<img src={googleImg} alt='google' />
				</a>
				<a href='/' className='sign__support'>
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
