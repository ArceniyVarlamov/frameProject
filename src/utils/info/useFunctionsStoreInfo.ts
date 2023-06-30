import { useSelector } from "react-redux";
import { IFunctionsState } from "../../store/functionsSlice";

export default function useFunctionsStoreInfo() {
  const { errors, updateCollectionData, updateFrameData } = useSelector(
    (state: { functions: IFunctionsState }) => state.functions
  );

  return { errors, updateCollectionData, updateFrameData };
}
