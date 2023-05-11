import { useEffect, useState } from "react";
import { GifImage, getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<GifImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, loading };
};
