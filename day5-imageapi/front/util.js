export const createURL = (file) => {
  const url = URL.createObjectURL(file);
  return url;
};

export const revokeURL = (url) => {
  URL.revokeObjectURL(url);
  return true;
};
