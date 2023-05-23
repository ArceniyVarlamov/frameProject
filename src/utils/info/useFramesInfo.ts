import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { IAccountState } from "../../store/accountSlice";
import { IFramesState } from "../../store/framesSlice";

export default function useFramesInfo() {
  const { framesLoaded, frames } = useSelector(
    (state: { frames: IFramesState }) => state.frames
  );

  return { framesLoaded, frames };
}
