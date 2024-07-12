import Modal from "react-modal";
import type * as CSS from "csstype";

// Modal.setAppElement("#root");

const customStyles: { content: CSS.Properties; overlay: CSS.Properties } = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgb(0, 0, 0, 0.75)",
    border: "none",
  },
};

interface ImageModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
  selectedImgSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpenModal,
  closeModal,
  selectedImgSrc,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <img width="850" src={selectedImgSrc} alt="img" />
      </Modal>
    </div>
  );
};

export default ImageModal;
