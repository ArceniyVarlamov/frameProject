import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef, useCallback } from "react";

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export function useFramesList(num: number, id: number) {
  // id = page, num = per_page
  // Ошибка
  const error = useRef("");
  // Загрузка
  const load = useRef(true);
  // Массив из информации
  const [frames, setFrames] = useState<any[]>([])

  const getInfo = useCallback(async () => {
    await axios
      .get(`https://api.unsplash.com/photos/?client_id=zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q;page=${id};per_page=${num}`)
      .then((info) => {
        setFrames(info.data)
      })
      .catch((err: AxiosError) => {
        error.current = err.message;
      });
    load.current = !load.current;
  }, [id, num])

  useEffect(() => {
    getInfo();
  }, [getInfo]);
  
  return { frames, error, load };
}
