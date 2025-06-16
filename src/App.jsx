import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import Button from "./components/Button";
import Image from "./components/Image";
import Modal from "./components/Modal.jsx";
import "./App.css";

function App() {
  const [images, setIamges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentImage, currentImageHandler] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=10"
        );
        const data = await response.json();
        setIamges(data || []);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  function nextImageHandler() {
    if (currentImage >= images.length - 1) {
      toast.error("You reached the end of image carousel");
      return;
    }
    currentImageHandler((prevState) => prevState + 1);
  }
  function previousImageHandler() {
    if (currentImage <= 0) {
      toast.error("You reached the end of image carousel");
      return;
    }
    currentImageHandler((prevState) => prevState - 1);
  }
  function closeModal() {
    setShowModal(false);
    setSelectedImage(null);
  }
  function handleImageClick(imageUrl) {
    setSelectedImage(imageUrl);
    setShowModal(true);
  }
  return (
    <>
      <div id="Container">
        {loading ? (
          <ClipLoader color="#000" size={50} />
        ) : (
          <>
            <Button previousImageHanlder={previousImageHandler}>
              <FaArrowLeft />
            </Button>
            <Image
              image={images}
              currentImage={currentImage}
              onClick={handleImageClick}
            />
            <Button nextImageHandler={nextImageHandler}>
              <FaArrowRight />
            </Button>
          </>
        )}
      </div>
      {showModal && <Modal imageUrl={selectedImage} onClose={closeModal} />}
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default App;
