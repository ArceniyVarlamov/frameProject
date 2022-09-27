import { useParams } from "react-router-dom";
import { useFramesId } from "../hooks/useFramesId";

export function Frame() {
  const { id = "" } = useParams();
  const { data, error, load } = useFramesId(id);

  return (
    <>
      <div
        className="frame"
      >
        <img className="frame__img" src={data.urls}/>
        <div className="frame__info"></div>
      </div>
    </>
  );
}
