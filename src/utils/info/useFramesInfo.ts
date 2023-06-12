import { useSelector } from "react-redux";
import { IFramesState } from "../../store/framesSlice";

export default function useFramesInfo() {
  const { framesLoaded, frames, framesMaxHeight, framesRedirect } = useSelector(
    (state: { frames: IFramesState }) => state.frames
  );

  return { framesLoaded, frames, framesMaxHeight, framesRedirect };
}
