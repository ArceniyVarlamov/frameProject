import { useState } from "react";
import useRegisterFireBase from "../../utils/registration/useRegisterFirebase";
import Error from "../functional/Error";
import { Link, useParams } from "react-router-dom";
import Correct from "../functional/Notification";

export default function Form() {
  const { type } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [register, setRegister] = useState(false);
  const [correct, setCorrect] = useState(true);

  const { errorFirebase } = useRegisterFireBase(email, password, register);

  const registerUser = () => {
    if (password === success && password.trim().length !== 0) {
      setRegister(true);
      setCorrect(true);
    } else {
      setCorrect(false);
      setTimeout(() => {
        setCorrect(true);
      }, 2000);
    }
  };

  return type === "signup" ? (
    <div className='form'>
      <div className='form__container'>
        <input
          type='email'
          placeholder='email'
          className='form__mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder='password'
          className='form__password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          placeholder='success password'
          className='form__password-success'
          value={success}
          onChange={(e) => setSuccess(e.target.value)}
        ></input>
        <div className='form__register' onClick={registerUser}>
          Register
        </div>
        <Link to='/' />
      </div>
      <Correct correct={correct} message='not valid password' />
      <Error err={errorFirebase} />
    </div>
  ) : (
    <div className='form'>
      <div className='form__container'>
        <input
          type='email'
          placeholder='email'
          className='form__mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder='password'
          className='form__password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className='form__register' onClick={registerUser}>
          Login
        </div>
        <Link to='/' />
      </div>
      <Error err={errorFirebase} />
    </div>
  );
}
