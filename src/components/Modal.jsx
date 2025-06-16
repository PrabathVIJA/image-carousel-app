function Modal({ imageUrl, onClose }) {
  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="enlarged" style={imageStyle} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "black",
  padding: "20px",
  borderRadius: "10px",
  // maxWidth: "90%",
  // maxHeight: "90%",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "50vh",
};
