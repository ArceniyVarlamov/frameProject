import FrameCol from "./FrameCol";
import useFetchByScroll from "../../hooks/functions/useFetchByScroll";
import useFramesInfo from '../../utils/info/useFramesInfo';

export default function Main() {

  const width = window.innerWidth;

  const {listId, col} = useFetchByScroll()
  
  return (
    <div className='main'>
      {Array(col)
        .fill("")
        .map((idFirst) => (
          <div className="main__container">
            {listId.map((idSecond) => (
              <FrameCol num={2} id={idSecond}/>
            ))}
          </div>
        ))}
    </div>
  );
}
