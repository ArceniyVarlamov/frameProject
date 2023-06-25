import { useSelector } from "react-redux";
import { IAccountState } from "../../store/accountSlice";
import { IVariablesState } from "../../store/variablesSlice";

export default function useVariablesStoreInfo() {
  const { framesMainWidth, framesCollectionsWidth, framesHeightConst } = useSelector(
    (state: { variables: IVariablesState }) => state.variables
  );
  
  return { framesMainWidth, framesCollectionsWidth, framesHeightConst };
}