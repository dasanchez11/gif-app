import { ChangeEvent, FormEvent, useState } from "react";

export interface AddCategoryProps {
  onNewCategory: Function;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 1) return;
    onNewCategory(value);
    setInputValue("");
  };

  return (
    <form action="" onSubmit={handleSubmit} aria-label="form">
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Search gifs and tap enter"
      />
    </form>
  );
};
