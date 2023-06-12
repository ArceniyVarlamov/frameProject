import { useSelector } from "react-redux";
import { IFunctionsState } from "../../store/functionsSlice";

export default function useFramesInfo() {
  const { errors } = useSelector(
    (state: { functions: IFunctionsState }) => state.functions
  );

  return { errors };
}
