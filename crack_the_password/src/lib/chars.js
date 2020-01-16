const AUX = (start, end) => {
  const RES = [];
  for (let index = start; index < end; index++) {
    RES.push(index);
  }
  return RES;
};

const CHARS = [
  ...AUX(32, 48),
  ...AUX(58, 65),
  ...AUX(91, 97),
  ...AUX(123, 127)
];

export const ALL_CHARS = CHARS.map(el => String.fromCharCode(el));

console.log(ALL_CHARS);
