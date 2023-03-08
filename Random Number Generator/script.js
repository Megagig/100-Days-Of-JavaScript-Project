const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  //Generate number between 0 -10;
  const randNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randNumber;
};

btn.addEventListener("click", generateNumber);
// const rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);
