import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
