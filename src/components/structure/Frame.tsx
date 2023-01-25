import { useState, useEffect } from "react";
import Loading from "../functional/Loading";
import Error from "../functional/Error";
import useFramesId from "../../hooks/get/useFramesId";
import useColor from "./../../hooks/functions/useColor";
import download from "../../images/download.png";
import share from "../../images/share.png";
import likeUnactive from "../../images/like_unactive.svg";
import likeActive from "../../images/like_active.svg";
import useAccountInfo from "../../utils/info/useAccountInfo";
import useRegisterUnsplash from '../../utils/registration/useRegisterUnsplash';
import useLike from "../../hooks/post/useLike";

export default function Frame({ id }: { id: string }) {

  // own hooks
  const { data, error, load } = useFramesId(id);
  const color = useColor(data?.color);

  const [like, setLike] = useState(data?.liked_by_user);

  // component functions
  const liked = () => {
    setLike((curr) => !curr);
  };
  const conditional = ({
    src,
    alt = "",
    addStart = "",
    addEnd = "",
    slice = undefined,
  }: {
    src: string | number | undefined;
    alt?: string;
    addStart?: string;
    addEnd?: string;
    slice?: number;
  }) => {
    const output = src ? src.toString() : alt;
    let slicing = output;
    if (output.slice(0, slice).length < output.length) {
      slicing = output.slice(0, slice) + "...";
    }
    return src ? addStart + slicing + addEnd : slicing;
  };

  const {frameData, frameError, frameLoading} = useLike(id, like)
  
  return (
    <>
      <Error err={error}></Error>
      <Loading loading={load} />
      {!load && (
        <div className='frame'>
          <img
            className='frame__img'
            src={conditional({
              src: data?.urls.full,
              alt: `https://via.placeholder.com/300x900/white`,
            })}
            alt='frame'
          />
          <div className='frame__info'>
            <div className='frame__links'>
              <div>
                <img src={download} alt='download' />
              </div>
              <div>
                <img src={share} alt='share' />
              </div>
              <p className='frame__views'>
                {conditional({ src: data?.views, addEnd: " views", slice: 8 })}
              </p>
              <p className='frame__downloads'>
                {conditional({
                  src: data?.downloads,
                  addEnd: " downloads",
                  slice: 8,
                })}
              </p>
            </div>
            <div className='frame__author' style={{ backgroundColor: color }}>
              <div className='frame__user'>
                <img
                  className='frame__icon'
                  src={conditional({
                    src: data?.user.profile_image.small,
                    alt: `https://via.placeholder.com/45x45/grey`,
                  })}
                  alt='icon'
                />
                <div className='frame__user-goal'>
                  <p className='frame__username' style={{ color: color }}>
                    {conditional({ src: data?.user.username })}
                  </p>
                  <p className='frame__total-photos'>
                    {conditional({ src: data?.user.total_photos })}
                  </p>
                </div>
              </div>
              <div className='frame__description'>
                {conditional({ src: data?.description, slice: 400 })}
              </div>
            </div>
            <div className='frame__likes'>
              <div>
                <img
                  src={conditional({ src: like ? likeActive : likeUnactive })}
                  alt='heart'
                  onClick={liked}
                />
                <p>{conditional({ src: data?.likes })}</p>
              </div>
              <div className='frame__location'>
                <p>
                  {conditional({
                    src: data?.location.name,
                    addStart: "location: ",
                    slice: 30,
                  })}
                </p>
              </div>
            </div>
            <div className='frame__comments'></div>
          </div>
        </div>
      )}
    </>
  );
}
