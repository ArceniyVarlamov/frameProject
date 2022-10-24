import { useFramesList } from "../hooks/useFramesList";
import { Link } from "react-router-dom";
import { useRef } from "react";
export function FrameCol({ num, id }: { num: number; id: number }) {
  const { frames, error, load } = useFramesList(num, id);

  let height = NaN;
  const randomH = useRef(~(Math.random() * 100));
  
  
  // TODO Оптимизировать приложение, начать делать компонент Frame

  return (
    <div className='main'>
      {error.current && (
        <div className='main__frame main_error'>{error.current}</div>
      )}
      {load.current && <div className='main__load'></div>}

      {!load.current &&
        frames!.map((item) => {
          if (height) {
            if (frames[0].height >= frames[1].height) {
              height = height + randomH.current * 2;
            } else {
              height = height - randomH.current * 2;
            }
          } else {
            const heightReal = window.screen.height / 2;
            if (frames[0].height >= frames[1].height) {
              height = heightReal - randomH.current;
            } else {
              height = heightReal + randomH.current;
            }
          }

          return (
            <div
              className='main__frame'
              style={{
                backgroundColor: item.color,
                height: `${height}px`,
              }}
              key={item.id}
            >
              <Link to={`frame/${item.id}`}>
                <img src={item.urls.full} className='main__img' />
              </Link>
            </div>
          );
        })}
    </div>
  );
}
