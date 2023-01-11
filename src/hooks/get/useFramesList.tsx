import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { IData } from "../../interface";

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export function useFramesList(num: number, id: number) {
  // id = page, num = per_page
  // Массив из информации
  const [frames, setFrames] = useState<IData[]>([]);
  // Ошибка
  const [error, setError] = useState<string>("");
  // Загрузка
  const [load, setLoad] = useState<boolean>(true);
  

  const getInfo = useCallback(async () => {
    try {
      setFrames(
        await (
          await axios.get(
            `https://api.unsplash.com/photos/?client_id=zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q;page=${id};per_page=${num}`
          )
        ).data
      );
    } catch (err: AxiosError | any) {
      setError(await err.message)
    } finally {
      setLoad(false)
    }
  }, []);

  // Когда пользователь достигнет границы страницы загружется информация
  useEffect(() => {
    getInfo();
  }, []);

  return { frames, error, load};
}
