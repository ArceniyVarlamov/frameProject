import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef } from "react";
import { IData } from "../interface";

// Хук, который загружает массив из информации о картинках в зависимости от номера страницы(id) и кол-ва картинок(num)
export function useFramesList(num: number, id: number) {
  // Ошибка
  const error = useRef("");
  // Загрузка
  const load = useRef(true);
  // Массив из информации
  const [frames, setFrames] = useState<IData[]>([])

  const getInfo = async () => {
    await axios
      .get(`https://picsum.photos/v2/list?page=${id.toString()}&limit=${num.toString()}`)
      .then((info) => {
        setFrames(info.data)
      })
      .catch((err: AxiosError) => {
        error.current = err.message;
      });
    load.current = !load.current;
  };

  useEffect(() => {
    getInfo();
  }, []);
  
  return { frames, error, load };
}
