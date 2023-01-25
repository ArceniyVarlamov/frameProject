import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useRegisterFireBase(
  email: string,
  password: string,
  register: boolean,
) {
  const [errorFirebase, setErrorFirebase] = useState("");
  const [dataFirebase, setDataFirebase] = useState<any | undefined>();

  const registerWithEmail = async () => {
    if (email.trim() && password.trim()) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setDataFirebase(userCredential.user)
          console.log(userCredential.user);
          
        })
        .catch((error) => {
          setErrorFirebase(error.message)
        });
    }
  };

  useEffect(() => {
    if (register) {
      registerWithEmail();
    }
  }, [register]);

  return { errorFirebase };
}
