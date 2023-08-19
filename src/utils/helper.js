export const convertMinutesToCustomFormat = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedTime = `${hours}H ${remainingMinutes}M`;
  return formattedTime;
};

export const getYear = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  return year;
};

export const logo =
  "https://raw.githubusercontent.com/doums10/react-movie-tmdb/master/src/images/no-image.jpg";
