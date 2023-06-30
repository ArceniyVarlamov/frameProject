import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IData } from "../../interface";
import useMetaData from '../../utils/info/useMetaData';
import { useDispatch } from "react-redux";
import { addError } from "../../store/functionsSlice";
import useFunctionsStoreInfo from "../../utils/info/useFunctionsStoreInfo";

export default function useFramesId(id: string | null | undefined) {
  const [data, setData] = useState<IData>();
  const [load, setLoad] = useState(false);

  const {unsplash} = useMetaData()
  const { updateFrameData } = useFunctionsStoreInfo()

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
    } catch (err: unknown) {
      const error = err as AxiosError;
      addError(dispatch, `${error.message} while getting frame data`)
    } finally {
      setLoad(false);
    }
  }, [dispatch, id, unsplash.ACCESS_KEY]);

  useEffect(() => {
    if (!!id) {
      getInfo();
    }
  }, [getInfo, id, updateFrameData]);

  return { data, load };
}
