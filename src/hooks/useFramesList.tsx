import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { IData } from "../interface";

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export function useFramesList(num: number, id: number) {
  // id = page, num = per_page
  // Ошибка
  const error = useRef("");
  // Загрузка
  const load = useRef(true);
  // Массив из информации
  const [frames, setFrames] = useState<IData[]>([]);

  const getInfo = useCallback(async () => {
    try {
      const info = await axios.get(
        `https://api.unsplash.com/photos/?client_id=zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q;page=${id};per_page=${num}`
      );
      setFrames(await info.data);
    } catch (err: AxiosError | any) {
      error.current = await err.message;
    } finally {
      load.current = !load.current;
    }
  }, []);

  // Когда пользователь достигнет границы страницы загружется информация
  useEffect(() => {
    getInfo();
  }, []);

  return { frames, error, load };
}
