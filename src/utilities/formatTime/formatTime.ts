export const formatTime = (min: number) => {
  const hours = Math.floor(min / 60);
  const remainingMinutes = min % 60;

  return `${hours}h ${remainingMinutes}min`;
};