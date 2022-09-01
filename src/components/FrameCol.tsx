import { useFrames } from "../hooks/useFrames";
export function FrameCol({ num, col }: { num: number; col: number }) {
  const frames = useFrames(num, col);

  return (
    <div className="main">
      {frames.error.current && (
        <div className="main__frame">{frames.error.current}</div>
      )}
      {frames.load.current && <div className="main__load"></div>}

      {!frames.load.current &&
        frames.frames.map((item) => (
          <div className="main__frame">
            <img src={`${item.download_url}`} alt="" />
          </div>
        ))}
    </div>
  );
}
