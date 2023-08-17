const button = document.querySelector(".image--button");
const input = document.querySelector(".image--input");

const buttonEvent = (e) => {
  e.preventDefault();
  input.click();
};

const inputEvent = (e) => {
  e.preventDefault();
  const { files } = e.target;
  console.dir(files[0]);
};

button.addEventListener("click", buttonEvent);
input.addEventListener("change", inputEvent);
