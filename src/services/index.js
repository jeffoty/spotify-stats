export const setLocalAccessToken = (token) => {
  window.localStorage.setItem("Access token", JSON.stringify(token));
};

export const getAccessToken = () => {
  return window.localStorage.getItem("Access token");
};

const headers = {
  Authorization: `Bearer ${getAccessToken}`,
  "Content-Type": "application/json",
};
