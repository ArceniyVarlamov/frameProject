import axios, { AxiosError } from "axios";
import { useCallback, useEffect } from "react";
// 8zLhFCa5QiRJamqz6pTq8gmL6D9KuOlN2gLFVqYpOE8

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
