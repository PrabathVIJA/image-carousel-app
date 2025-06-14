import { useEffect, useState } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import Button from "./components/Button";
import Image from "./components/Image";
import "./App.css";

function App() {
  const [images, setIamges] = useState([]);
  const [loading, setLoading] = useState(false);

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
  return (
    <div id="Container">
      {loading ? (
        <ClipLoader color="#000" size={50} />
      ) : (
        <>
          <Button>
            <FaArrowLeft />
          </Button>
          <Image image={images} />
          <Button>
            <FaArrowRight />
          </Button>
        </>
      )}
    </div>
  );
}

export default App;
