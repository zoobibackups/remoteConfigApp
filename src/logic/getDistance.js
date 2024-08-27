const robustAcos = value => {
  if (value > 1) {
    return 1;
  }
  if (value < -1) {
    return -1;
  }
  return value;
};

const toRad = value => (value * Math.PI) / 180;
const getDistance = ({from, to, accuracy = 0.01}) => {
  return new Promise((resolve, rejcect) => {
    const fromLat = from.lat;
    const fromLon = from.lng;
    const toLat = to.lat;
    const toLon = to.lng;
    const earthRadius = 6378137;
    const distance =
      Math.acos(
        robustAcos(
          Math.sin(toRad(toLat)) * Math.sin(toRad(fromLat)) +
            Math.cos(toRad(toLat)) *
              Math.cos(toRad(fromLat)) *
              Math.cos(toRad(fromLon) - toRad(toLon)),
        ),
      ) * earthRadius;

    resolve(Math.round(distance / accuracy) * accuracy);
  });
};

export default getDistance;

// this return distance on the M
