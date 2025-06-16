function Image({ image, currentImage }) {
  if (!image || image.length === 0) return null;
  return (
    <img
      src={image[currentImage]?.download_url}
      alt="Girl in a jacket"
      width="500"
      height="600"
    ></img>
  );
}

export default Image;
