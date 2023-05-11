import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpert = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (name: string) => {
    if (categories.includes(name)) return;
    setCategories((state) => [name, ...state]);
  };

  return (
    <>
      <AddCategory onNewCategory={onAddCategory} />
      <h1>GifExpert</h1>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
