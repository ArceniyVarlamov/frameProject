export interface IFramesReducer {
  frames: string[],
  id: number,
  col: number
}

export interface IData {
  id: string,
  width: number,
  height: number,
  color: string,
  description: string | null,
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string,
    small_s3: string,
  },
  categories: string[],
  likes: number,
  liked_by_user: false,
  current_user_collections: string[],
  user: {
    id: string,
    updated_at: string,
    username: string,
    location: string | null,
    profile_image: {
      small: string,
      medium: string,
      large: string
    }
  },
  views: number,
  downloads: number,
  topics: string[],
}