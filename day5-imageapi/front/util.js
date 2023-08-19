export const createURL = (file) => {
  const url = URL.createObjectURL(file);
  return url;
};

// 현재는 사용되지 않았지만, 메모리 누수 방지를 위해 이미지 해제 작업이 필요하다.
export const revokeURL = (url) => {
  URL.revokeObjectURL(url);
  return true;
};

const postImage = async (image) => {
  const { data } = await fetch(`https://1day1quote-be.fly.dev/image/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: image,
  });
  return data;
};

export const changeServerImage = async (dom, file, temp) => {
  const formData = new FormData();
  formData.append("image", file);

  console.log("formData :");
  console.dir(formData);
  console.log("image in formData: ");
  console.dir(formData.get("image"));

  try {
    const { data } = await postImage(formData);
    console.dir("url : ", data);
    dom.style.backgroundImage = data.imageURL;
  } catch {
    dom.style.backgroundImage = `url(${temp})`;
  }
};
