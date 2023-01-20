import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addId, addCol } from "../../store/framesSlice";
import { IFramesState } from "./../../store/framesSlice";
import useFramesInfo from "../info/useFramesInfo";

export default function useFetchByScroll() {
  const { id, col } = useFramesInfo();

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
