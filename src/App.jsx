import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=10"
      );
      const data = await response.json();
      console.log(data[0].id);
    }
    fetchImages();
  }, []);
  return <h2>Hii</h2>;
}

export default App;
