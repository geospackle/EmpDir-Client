const debounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) return;
    cb(...args);
    timer = true;
    setTimeout(() => {
      timer = null;
    }, delay);
  };
};

export default debounce;
