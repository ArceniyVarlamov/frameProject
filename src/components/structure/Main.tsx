import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import FrameCol from "./FrameCol";
import useFetchByScroll from "../../hooks/functions/useFetchByScroll";
import useFramesInfo from './../../hooks/info/useFramesInfo';

export default function Main() {

  const width = window.innerWidth;

  const {listId, col} = useFetchByScroll()

  const {id: framesId, col: framesCol} = useFramesInfo()

  return (
    <div className='main'>
      {Array(col)
        .fill("")
        .map((idFirst) => (
          <div className="main__container" key={idFirst * framesCol}>
            {listId.map((idSecond) => (
              <FrameCol num={2} id={idFirst * idSecond * framesCol}/>
            ))}
          </div>
        ))}
    </div>
  );
}
