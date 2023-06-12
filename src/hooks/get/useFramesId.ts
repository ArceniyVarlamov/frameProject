import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IData } from "../../interface";
import useMetaData from '../../utils/info/useMetaData';
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";

export default function useFramesId(id: string | null | undefined) {
  const [data, setData] = useState<IData>();
  const [load, setLoad] = useState(false);

  const {unsplash} = useMetaData()

  const dispatch = useDispatch()

  const getInfo = useCallback(async () => {
    try {
      setData(
        await (
          await axios.get(`https://api.unsplash.com/photos/${id}`, {
            headers: {
              Authorization: `Client-ID ${unsplash.ACCESS_KEY}`,
            },
          })
        ).data
      );
    } catch (err: AxiosError | any) {
      dispatch(addError(`${err.message} occurred while getting frame data`))
    } finally {
      setLoad(false);
    }
  }, [id, unsplash.ACCESS_KEY]);

  useEffect(() => {
    if (typeof id === "string") {
      getInfo();
    }
  }, [getInfo, id]);

  return { data, load };
}
