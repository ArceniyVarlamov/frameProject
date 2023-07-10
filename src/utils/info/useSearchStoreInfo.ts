import { useSelector } from "react-redux";
import { IAccountState } from "../../store/accountSlice";
import { ISearchState } from "../../store/searchSlice";

export default function useSearchStoreInfo() {
  const { searchInfo, searchHistory } = useSelector(
    (state: { search: ISearchState }) => state.search
  );
  
  return { searchInfo, searchHistory };
}
