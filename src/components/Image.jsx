function Image({ image }) {
  console.log("Received in Image component:", image);
  if (!image || image.length === 0) return null;
  return (
    <img
      src={image[0]?.download_url}
      alt="Girl in a jacket"
      width="500"
      height="600"
    ></img>
  );
}

export default Image;
