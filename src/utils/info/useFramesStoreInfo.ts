import { useSelector } from "react-redux";
import { IFramesState } from "../../store/framesSlice";

export default function useFramesStoreInfo() {
  const { framesLoaded, framesRedirect } = useSelector(
    (state: { frames: IFramesState }) => state.frames
  );

  return { framesLoaded, framesRedirect };
}
