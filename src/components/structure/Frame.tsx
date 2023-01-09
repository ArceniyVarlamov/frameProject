import { useFramesId } from "../../hooks/get/useFramesId";
import { useState } from "react";
import { Loading } from "./../animation/Loading";
import { Error } from "./../animation/Error";
import useColor from "./../../hooks/functions/useColor";
import download from "../../images/download.png";
import share from "../../images/share.png";
import likeUnactive from "../../images/like-black.svg";
import likeActive from "../../images/like-red.svg";

export function Frame({ id }: { id: string }) {
  const { data, error, load } = useFramesId(id);
  const color = useColor(data?.color);

  const liked = () => {
    setLike((curr) => !curr);
  };

  const [like, setLike] = useState(data?.liked_by_user);

  return (
    <>
      <Error err={error} />
      <Loading loading={load} />
      {!load && (
        <div className='frame'>
          <img className='frame__img' src={`${data?.urls.full}`} alt='' />
          <div className='frame__info'>
            <div className='frame__links'>
              <div>
                <img src={download} alt='download' />
              </div>
              <div>
                <img src={share} alt='share' />
              </div>
              <p className='frame__views'>{data?.views} views</p>
              <p className='frame__downloads'>{data?.downloads} downloads</p>
            </div>
            <div className='frame__author' style={{ backgroundColor: color }}>
              <div className='frame__user'>
                <img
                  className='frame__icon'
                  src={`${data?.user.profile_image.small}`}
                  alt='*'
                />
                <div className='frame__user-goal'>
                  <p className='frame__username' style={{ color: color }}>
                    {data?.user.username}
                  </p>
                  <p className='frame__total-photos'>
                    {data?.user.total_photos} photos
                  </p>
                </div>
              </div>
              <div className='frame__description'>
                {`${
                  data?.description != null ? data?.description.slice(40) : ""
                }`}
              </div>
            </div>
            <div className='frame__likes'>
              <img
                src={like ? likeActive : likeUnactive}
                alt='heart'
                onClick={liked}
              />
              {data?.likes}
            </div>
            <div className='frame__comments'></div>
          </div>
        </div>
      )}
    </>
  );
}
