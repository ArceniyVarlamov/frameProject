import { useSelector } from "react-redux";
import { IFramesState } from "../../store/framesSlice";

export default function useFramesInfo() {
  const { id, col, frames } = useSelector((state: { frames: IFramesState }) => state.frames);
  return { id, col, frames }
}
