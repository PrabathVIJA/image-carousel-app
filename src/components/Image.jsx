function Image({ image, currentImage, onClick }) {
  if (!image || image.length === 0) return null;
  return (
    <img
      src={image[currentImage]?.download_url}
      alt="Girl in a jacket"
      width="500"
      height="600"
      onClick={() => onClick(image[currentImage]?.download_url)}
    ></img>
  );
}

export default Image;
