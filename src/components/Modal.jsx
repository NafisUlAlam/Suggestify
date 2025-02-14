import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed bg-black/50 inset-0"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text border-2 w-1/2 h-1/2 p-16 bg-background rounded-lg">
        <div className="relative">
          <button
            onClick={onClose}
            className="btn w-8 h-8 min-h-0 p-0 bg-primary rounded-full hover:bg-orange-400 border-0 text-text fixed -right-2 -top-2"
          >
            X
          </button>
        </div>
        <h2 className="overflow-auto">Hello</h2>
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
