import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import FrameCol from "./FrameCol";
import useFetchByScroll from "../../hooks/functions/useFetchByScroll";

export default function Main() {

  const width = window.innerWidth;

  const {listId, col} = useFetchByScroll()

  return (
    <div className='main'>
      {Array(col)
        .fill("")
        .map(() => (
          <>
            {listId.map((id) => (
              <FrameCol num={2} id={id}/>
            ))}
          </>
        ))}
    </div>
  );
}
