import { useFramesList } from "../hooks/useFramesList";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
export function FrameCol({ num, id }: { num: number, id: number }) {

  const { frames, error, load } = useFramesList(num, id);
  
  return (
    <div className='main'>
      {error.current && (
        <div className='main__frame main_error'>{error.current}</div>
      )}
      {load.current && <div className='main__load'></div>}

      {!load.current &&
        frames?.map((item) => {
          return (
            <div
              className='main__frame'
              style={{
                height:
                  item.height * 0.1 >= 420
                    ? Math.floor(Math.random() * 100) + 400
                    : item.height * 0.1,
                backgroundColor: item.color,
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
