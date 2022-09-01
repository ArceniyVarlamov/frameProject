import { useFramesList } from "../hooks/useFramesList";
import { Link } from "react-router-dom";
export function FrameCol({ num, col }: { num: number; col: number }) {
  const frames = useFramesList(num, col);

  return (
    <div className="main">
      {frames.error.current && (
        <div className="main__frame">{frames.error.current}</div>
      )}
      {frames.load.current && <div className="main__load"></div>}

      {!frames.load.current &&
        frames.frames.map((item) => (
          <div
            className="main__frame"
            style={{ height: item.height * 0.1 }}
            key={item.id}
          >
            <Link to={`frame/${item.id}`}>
              <img src={item.download_url} alt="../images/loaing.gif" className="main__img"/>
            </Link>
          </div>
        ))}
    </div>
  );
}
