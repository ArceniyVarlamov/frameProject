import { useFramesId } from "../../hooks/get/useFramesId";
import { useEffect } from 'react';

export function Frame({id}: {id: string}) {
  
  const { data, error, load } = useFramesId(id);

  useEffect(() => {
    console.log(error, load);
  }, [])
  return (
    <>
    
      {!load && !error && <div className='frame'>
        <img className='frame__img' src={`${data?.urls.full}`} alt='' />
        <div className='frame__info' style={{ backgroundColor: data?.color }}>
          <div className='frame__links'>
            <div>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Download_alt_font_awesome.svg/1200px-Download_alt_font_awesome.svg.png'
                alt='*'
              />
            </div>
            <div>
              <img
                src='http://cdn.onlinewebfonts.com/svg/img_201365.png'
                alt='*'
              />
            </div>
          </div>
          <div className='frame__author'>
            <img src={`${data?.user.profile_image.small}`} alt='*' />
            <p className='frame__username'>
              {data?.user.username}
            </p>
            <p className='frame__bio'>{data?.user.bio}</p>
          </div>
          <div className='frame__description'>
            {`${data?.description != null ? data.description : ""}`}
          </div>
          <div className='frame__comments'></div>
        </div>
      </div>}
    </>
  );
}