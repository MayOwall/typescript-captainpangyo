import { createURL, changeServerImage } from "./util.js";

const button = document.querySelector(".image--button");
const input = document.querySelector(".image--input");
const previewBox = document.querySelector(".preview--box");
const uploadBox = document.querySelector(".upload--box");

const buttonEvent = (e) => {
  e.preventDefault();
  input.click();
};

const inputEvent = (e) => {
  e.preventDefault();

  // 이미지 파일 가져오기
  const { files } = e.target;
  const file = files[0];
  if (!file) return alert("No Image");

  // 미리보기 이미지 구현
  const tempURL = createURL(file);
  previewBox.style.backgroundImage = `url(${tempURL})`;

  // 서버로 이미지 전송 및 서버 이미지 구현
  changeServerImage(uploadBox, file, tempURL);
};

button.addEventListener("click", buttonEvent);
input.addEventListener("change", inputEvent);
