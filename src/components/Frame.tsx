import { useParams } from "react-router-dom";
import { useFramesId } from "../hooks/useFramesId";

export function Frame() {
  const { id = "" } = useParams();
  const { data, error, load } = useFramesId(id);

  return (
    <>
      <div
        className="board"
      >
        <img className="board__img"/>
        <div className="board__info"></div>
      </div>
    </>
  );
}
