import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

export function useFetchByScroll() {
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
        200 &&
      !fetching
    ) {
      setFetching(true)
      console.log(fetching);
    } else {
      setFetching(false)
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
      dispatch({ type: "ADD_COL" });
      dispatch({ type: "ADD_ID" });
      setFetching(false)
    }
    console.log(fetching);
  }, [fetching]);

  return { listId, col };
}
