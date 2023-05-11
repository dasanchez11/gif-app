import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }: { category: string }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {loading && <h2>Loading...</h2>}
        {!loading &&
          images.map((image) => <GifGridItem key={image.id} {...image} />)}
      </div>
    </>
  );
};
