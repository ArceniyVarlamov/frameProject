import { FrameCol } from "./FrameCol";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useFetchByScroll } from "../hooks/functions/useFetchByScroll";

export function Main() {

  const width = window.innerWidth;

  const {listId, col} = useFetchByScroll()

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
