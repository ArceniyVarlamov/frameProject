import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [register, setRegister] = useState(false);


  const registerWithEmail = () => {
    if (email.trim() && password.trim()) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  const inputHandlerEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const inputHandlerPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const inputHandlerSuccess = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuccess(event.target.value);
  };

  return (
    <div className='form'>
      <input
        type='email'
        placeholder='email'
        className='form__mail'
        onChange={inputHandlerEmail}
      ></input>
      <input
        placeholder='password'
        className='form__password'
        onChange={inputHandlerPassword}
      ></input>
      <input
        placeholder='success password'
        className='form__password-success'
        onChange={inputHandlerSuccess}
      ></input>
      <div className='form__register' onClick={registerWithEmail}>
        Register
      </div>
    </div>
  );
}
