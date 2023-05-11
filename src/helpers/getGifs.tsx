import { GifFetchResponse } from "./gifFetch.model";

export interface GifImage {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async (category: string): Promise<GifImage[]> => {
  const baseUrl = "https://api.giphy.com/v1/gifs/search";
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = baseUrl + `?api_key=${apiKey}` + `&q=${category}&limit=10`;

  const gifFetch = await fetch(url);
  const { data }: { data: GifFetchResponse[] } = await gifFetch.json();

  const gifs: GifImage[] = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
