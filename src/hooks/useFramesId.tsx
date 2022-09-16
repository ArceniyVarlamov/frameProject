import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import { useEffect, useCallback } from "react";

export function useFramesId(id: string) {
  const error = useRef("");
  const load = useRef(true);
  const [data, setData] = useState<any>();
  const getInfo = useCallback(async () => {
    try {
      setData(
        await (
          await axios.get(`https://api.unsplash.com/photos/${id}?client_id=zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q`)
        ).data
      );
    } catch (err) {
      const e = err as AxiosError;
      error.current = e.message;
    } finally {
      load.current = !load.current;
    }
  }, [id])

  useEffect(() => {
    getInfo()
  }, [getInfo]);

  return { data, error: error.current, load: load.current };
}
