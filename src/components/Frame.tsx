import { useParams } from "react-router-dom";
import { useFramesId } from "../hooks/useFramesId";
import { IData } from "../interface";

export function Frame() {
  const { id = "" } = useParams();
  const { data, error, load } = useFramesId(id);

  console.log(data);

  return (
    <>
      <div className='frame'>
        <img className='frame__img' src={`${data?.urls.full}`} alt='' />
        <div className='frame__info' style={{ backgroundColor: data?.color }}>
          <div className='frame__links'></div>
          <div className='frame__author'></div>
          <div className='frame__description'>
            {`${data?.description != null ? data.description : ""}`}
          </div>
          <div className='frame__comments'></div>
        </div>
      </div>
    </>
  );
}
