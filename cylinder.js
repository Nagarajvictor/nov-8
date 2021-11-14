let data = {
  height: 15,
  radius: 10
};
// function to find volume
const volume = (radius, height) => {
  return (22 / 7) * radius * radius * height;
};
// function to find surface area
const surfaceArea = (radius, height) => {
  return 2 * (22 / 7) * radius * height + 2 * (22 / 7) * radius * radius;
};
let v = volume(data.radius, data.height);
let surface = surfaceArea(data.radius, data.height);
console.log(v, surface);
