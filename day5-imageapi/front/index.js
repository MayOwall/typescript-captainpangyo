import { createURL, revokeURL } from "./util.js";

const button = document.querySelector(".image--button");
const input = document.querySelector(".image--input");
const previewBox = document.querySelector(".preview--box");

const buttonEvent = (e) => {
  e.preventDefault();
  input.click();
};

const inputEvent = (e) => {
  e.preventDefault();
  const { files } = e.target;
  const file = files[0];
  if (!file) return alert("No Image");

  const tempURL = createURL(file);
  previewBox.style.backgroundImage = `url(${tempURL})`;
};

button.addEventListener("click", buttonEvent);
input.addEventListener("change", inputEvent);
