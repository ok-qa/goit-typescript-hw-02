import css from "./ErrorMsg.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div>
      <h3 className={css.errorMsg}>
        Oops... An error occured. Please try again later.
      </h3>
    </div>
  );
};

export default ErrorMessage;
