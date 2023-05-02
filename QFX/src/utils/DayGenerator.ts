export const dayGenerator = () => {
  let Today = new Date().getDay();
  let Day = '';
  let thirdDay = Today + 2;
  if (thirdDay === 0) {
    Day = 'Sunday';
  }
  if (thirdDay === 1) {
    Day = 'Monday';
  }
  if (thirdDay === 2) {
    Day = 'Tuesday';
  }
  if (thirdDay === 3) {
    Day = 'Wednesday';
  }
  if (thirdDay === 4) {
    Day = 'Thursday';
  }
  if (thirdDay === 5) {
    Day = 'Friday';
  }
  if (thirdDay === 6) {
    Day = 'Saturday';
  }
  return Day;
};
