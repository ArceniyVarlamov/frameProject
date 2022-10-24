import { FrameCol } from "./FrameCol";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export function Main() {
  const width = window.innerWidth;
  const [fetching, setFetching] = useState(false);
  let id = useSelector<{ frames: { id: number } }, number>(
    (state) => state.frames.id
  );
  const col = useSelector<{ frames: { col: number } }>(
    (state) => state.frames.col
  );

  const dispatch = useDispatch();

  // Добавление слушателя скролла
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // Условие при котором меняется фетчинг
  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    setFetching(false);
    if (fetching) {
      dispatch({ type: "ADD_COL" });
      dispatch({ type: "ADD_ID" });
    }
  }, [fetching]);

  const listId = [id, id + 1, id + 2, id + 3, id + 4, id + 5];

  return (
    <div className='col'>
      {Array(col)
        .fill("")
        .map(() => (
          <>
            {listId.map((id) => (
              <FrameCol num={2} id={id} />
            ))}
          </>
        ))}
    </div>
  );
}
