import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
export default function useRegisterUnsplash(code: string | null) {
  const [accountData, setAccountData] = useState();
  const [accountError, setAccountError] = useState<string>("");
  const postRegisterUnsplash = useCallback(async (code: string) => {
    const client_id = process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY;
    const client_secret = process.env.REACT_APP_UNSPLASH_API_SECRET_KEY;
    const redirect_uri = "http://localhost:3000/";
    console.log(`https://unsplash.com/oauth/token?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=http://localhost:3000&grant_type=authorization_code&code=${code}"`);
    
    try {
      console.log('asfasfasf');
      
      setAccountData(
        await (
          await axios.post(`https://unsplash.com/oauth/token?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=http://localhost:3000&grant_type=authorization_code&code=${code}`)
        ).data,
      );
    } catch (err: AxiosError | any) {
      setAccountError(err);
    }
  }, []);

  useEffect(() => {
    if (code) {
      postRegisterUnsplash(code);
    }
  }, []);

  return { accountData, accountError };
}
