import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import { IData } from "../interface";
import { useEffect } from "react";

export function useFramesId(id: string) {
  const error = useRef("");
  const load = useRef(true);
  const [data, setData] = useState<IData>();
  const getInfo = async () => {
    try {
      setData(
        await (
          await axios.get(`https://picsum.photos/id/${id}/info`)
        ).data
      );
    } catch (err) {
      const e = err as AxiosError;
      error.current = e.message;
    } finally {
      load.current = !load.current;
    }
  };

  useEffect(() => {
    getInfo()
  }, [getInfo]);

  return { data, error: error.current, load: load.current };
}
