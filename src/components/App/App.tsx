import { useEffect, useState } from "react";
import Modal from "react-modal";

import { getPhotosByQuery } from "../../api/api-service";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMsg/ErrorMsg";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { ImageEntity } from "../../entities";

import css from "./App.module.css";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState<ImageEntity[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImgSrc, setModalImgSrc] = useState<string>("");

  useEffect(() => {
    if (modalImgSrc) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [modalImgSrc]);

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const data = await getPhotosByQuery(query, nextPage);
    setPage(nextPage);
    setImages((prev) => [...prev, ...data.result]);
  };

  const handleSearch = async (query: string) => {
    try {
      setQuery(query);
      setImages([]);
      setPage(1);
      const data = await getPhotosByQuery(query, 1);
      setImages(data.result);
      setTotalPages(data.totalPages);
    } catch (e) {
      setError(true);
    }
  };

  const showLoadMoreBtn = page + 1 <= totalPages;

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} setModalImgSrc={setModalImgSrc} />
      {showLoadMoreBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpenModal={modalIsOpen}
        closeModal={() => setIsOpen(false)}
        selectedImgSrc={modalImgSrc}
      />
    </div>
  );
}

export default App;
