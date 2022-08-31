export interface IFramesReducer {
  frames: string[],
  id: number
}

export interface IData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}