import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addId, addCol } from "../../store/framesReduser";

export default function useFetchByScroll() {
  const id = useSelector<{ frames: { id: number } }, number>(
    (state) => state.frames.id
  );
  const col = useSelector<{ frames: { col: number } }, number>(
    (state) => state.frames.col
  );

  const [fetching, setFetching] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Условие при котором меняется фетчинг
  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        50 &&
      !fetching
    ) {
      setFetching(true);
    } else {
      setFetching(false);
    }
  };

  // Добавление слушателя скролла
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // id для каждого столбика
  let listId: number[] = [id, id + 1, id + 2, id + 3, id + 4, id + 5];

  useEffect(() => {
    if (fetching) {
      dispatch(addId());
      dispatch(addCol());
      setFetching(false);
    }
  }, [fetching]);

  return { listId, col };
}
