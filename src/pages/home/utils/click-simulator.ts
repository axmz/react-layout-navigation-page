export const clickCallBack = (e: any) => {
  e.preventDefault();
  e.currentTarget.style.transform = `scale(0.98)`;
  const func = (t: any) => {
    setTimeout(() => (t.style.transform = `scale(1)`), 50);
  }
  func(e.currentTarget);
};
