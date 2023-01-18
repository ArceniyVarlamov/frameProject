import axios, { AxiosError } from "axios";
import { useCallback, useEffect } from "react";
// https://unsplash.com/oauth/authorize?client_id=zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q&redirect_uri=http://localhost:3000/&response_type=code&scopes=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections
export default function useLike(id: string, like: boolean | undefined) {
  const postLike = useCallback(async (frameId: string) => {
    try {
      await axios.post(`https://api.unsplash.com/photos/${frameId}/like`, {
        header: {
          Authorization:
            "Client-ID zmLIgleoUKB20K9gwruTbK0AtQ7zOciZQtlAKlPI-8Q",
        },
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (like) {
      postLike(id);
    }
  }, [like]);
}
