const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);

//How to generate a random color/number
// let color = Math.random();
// color = Math.random().toString(16).substring(2, 8); //You need to convert it to string bc the hex color contains letter and strings. i added base 16 to convert it to both numbers and strings.I added the substring method to shorten the generated numbers and strings.
// console.log(color);
