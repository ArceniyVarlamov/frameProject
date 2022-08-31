import { useFrames } from "../hooks/useFrames";
import { useSelector } from "react-redux";
import { IData, IFramesReducer } from "../interface";
import { useDispatch } from "react-redux";
import { addIdAction } from "../store/framesReduser";
import { useEffect, useRef } from "react";
import { newIdAction, setIdAction } from "./../store/framesReduser";
export function FrameCol({ num, col }: { num: number; col: number }) {

  const dispatch = useDispatch();

  return (
    <div className="col">
      {Array(col).fill('').map((value, id) => (
        <div className="main">
          {useFrames(num, ++id).frames.map((item) => (
            <div className="main__frame">
              <img src={`${item.download_url}`} alt="" />
            </div>
          ))}
        </div>
      ), )}
    </div>
  );
}
