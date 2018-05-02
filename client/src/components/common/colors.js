export const baseColor = "#e67e22";

export const generateRandomColor = () => {
  const strings = "0123456789abcdef".split('');
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += strings[Math.floor(Math.random()*strings.length)];
  }
  return color;
};
