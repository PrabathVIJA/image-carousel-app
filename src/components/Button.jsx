function Button({ children, nextImageHandler, previousImageHanlder }) {
  function handleClick() {
    if (nextImageHandler) {
      nextImageHandler();
    } else if (previousImageHanlder) {
      previousImageHanlder();
    }
  }
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;
