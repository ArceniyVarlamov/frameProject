import { useFramesList } from "../../hooks/get/useFramesList";
import { useRandomHeight } from "../../hooks/functions/useRandomHeight";
import { Link } from "react-router-dom";
import { Loading } from './../animation/Loading';
import { Error } from './../animation/Error';
export function FrameCol({ num, id }: { num: number; id: number }) {
  const { frames, error, load } = useFramesList(num, id);

  //TODO рандомные высоты ДВУХ картинок в столбце
  const heights = useRandomHeight(num)

  return (
    <div className='main__col'>
      {error.current && <Error err={error.current}/>}
      {load.current && <Loading/>}
      {!load.current &&
        frames!.map((item, i) => {
          return (
            <div
              className='main__frame'
              style={{
                backgroundColor: item.color,
                height: `${heights[i]}px`,
              }}
              key={item.id}
            >
              <Link to={`/frame/${item.id}`}>
                <img src={item.urls.regular} className='main__img'/>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
