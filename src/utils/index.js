export const getDuration = (milliseconds) => {
  const mins = Math.floor(milliseconds / 60000).toString();
  const secs = ((milliseconds % 60000) / 1000).toFixed(0);
  return mins + ":" + secs;
};
