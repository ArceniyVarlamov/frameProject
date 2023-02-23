import { Link } from "react-router-dom";
import Loading from "../functional/Loading";
import Error from "../functional/Error";
import useRandomHeight from "../../hooks/functions/useRandomHeight";
import useFramesList from "../../hooks/get/useFramesList";
import useFramesInfo from "../../utils/info/useFramesInfo";
import Image from './Image';

export default function FrameCol({ num, id }: { num: number; id: number }) {
  const { frames, error, load } = useFramesList(num, id);

  //TODO рандомные высоты ДВУХ картинок в столбце
  const heights = useRandomHeight(num);

  return (
    <div className='main__col'>
      <Error err={error} />
      <Loading loading={load} />
      {frames!.map((item, i) => {
        return (
          <div key={item.urls.raw}>
            {!load && (
              <div
                className='main__frame'
                style={{
                  backgroundColor: item?.color,
                  height: `${heights[i]}px`,
                }}
              >
                <Link to={`/frame/${item?.id}`} className='main__link'>
                  <Image src={item?.urls?.regular} className='main__img'></Image>
                  <div className="main__author">{item?.user?.username}</div>
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
