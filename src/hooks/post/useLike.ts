import axios from "axios";
import { useCallback, useEffect } from "react";
export default function useLike(id: string, like: boolean | undefined) {
  const postLike = useCallback(async (frameId: string) => {
    try {
      await axios.post(`https://api.unsplash.com/photos/${frameId}/like`, {
        header: {
          "client_id": process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY,
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
