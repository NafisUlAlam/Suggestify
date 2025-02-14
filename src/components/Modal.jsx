import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed bg-black/50 inset-0"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text border-2 w-1/2 p-10 bg-background">
        <button onClick={onClose} className="btn bg-primary border-0 text-text">
          Close
        </button>
        <h2>Hello</h2>
      </div>
    </>,
    document.getElementById("portal")
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
