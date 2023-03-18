document.querySelector("button");
document.querySelector(".output");
document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input");

//btn.innerHTML = "calculate Tip";
btn.addEventListener("click", function () {
  const cost = document.querySelector("input");
  let tip = (cost.value * 0.15).toFixed(2);
  let temp = `<h1>You should tip $${tip}on $${cost.value}</h1>`;
  output.innerHTML = temp;
  //btn.innerHTML = "Output";
  //console.log(cost.value);
});
