export interface IData {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | "";
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  categories: string[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  user: {
    id: string;
    updated_at: string;
    username: string;
    location: string | null;
    portfolio_url: string;
    bio: string;
    total_photos: number;
    total_likes: number;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  location: {
    name: string;
    city: string;
    country: string;
  };
  views: number;
  downloads: number;
  topics: string[];
}

export interface IFirebaseUser {
  accessToken: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  stsTokenManager: {
    accessToken: string;
    refreshToken: string;
  };
  uid: string;
}

export interface IUnsplashUser {
  access_token: string;
  token_type: string;
  scope: string;
  created_at: number;
  refresh_token: string;
}
