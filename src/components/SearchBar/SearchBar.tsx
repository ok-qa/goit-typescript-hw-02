import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent } from "react";

interface CustomElements extends HTMLFormControlsCollection {
  text: HTMLInputElement;
}

interface SearchForm extends HTMLFormElement {
  elements: CustomElements;
}

const SearchBar: React.FC<{ onSearch: (value: string) => void }> = ({
  onSearch,
}) => {
  const handleSubmit = (e: FormEvent<SearchForm>) => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const value = form.text.value;

    if (value.length === 0) {
      toast.error("Uh oh! The searchfield is empty...", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
      });
      return;
    }
    onSearch(value);
    e.currentTarget.reset();
  };
  return (
    <>
      <Toaster position="top-center" />
      <header className={css.searchField}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
