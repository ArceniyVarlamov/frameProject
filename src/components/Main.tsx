import { FrameCol } from "./FrameCol";

export function Main() {
  return (
    <div className="col">
      {Array(6)
        .fill("")
        .map((item, i) => (
          <FrameCol num={2} col={++i} />
        ))}
    </div>
  );
}
