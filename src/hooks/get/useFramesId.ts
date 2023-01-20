import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IData } from "../../interface";

export default function useFramesId(id: string) {
  const [data, setData] = useState<IData>();
  const [error, setError] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const getInfo = useCallback(async () => {
    try {
      setData(
        await (
          await axios.get(`https://api.unsplash.com/photos/${id}`, {
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`,
            },
          })
        ).data
      );
    } catch (err: AxiosError | any) {
      setError(err.message);
    } finally {
      setLoad(false);
    }
  }, []);

  useEffect(() => {
    getInfo();
  }, [id]);

  return { data, error, load };
}
