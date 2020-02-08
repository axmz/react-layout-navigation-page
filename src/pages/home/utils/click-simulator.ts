export const clickCallBack = (e: any) => {
  e.preventDefault();
  e.target.style.scale = 0.95;
  function func(t: any) {
    setTimeout(() => (t.style.scale = 1), 100);
  }
  func(e.target);
};
