import { useEffect, useState } from "react";

export default function useRandomHeight(num: number) {
  //TODO Глобальная константа начальной высоты картинки при подгрузке
  const [height, setHeight] = useState([400, 400]);

  useEffect(() => {
    //TODO Глобальная константа разницы в высоте картинок
    const rH = Math.round(Math.random() * 100);
    if (Math.random() >= 0.5) {
      setHeight((curr) => [curr[0] + rH, curr[1] - rH]);
    } else {
      setHeight((curr) => [curr[0] + rH, curr[1] - rH]);
    }
  }, []);
  return height
}
