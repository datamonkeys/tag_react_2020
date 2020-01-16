export const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// getting a code V2
export const generatePassword = arr => {
  const res = [];

  for (let index = 0; index < 4; index++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    res.push(arr[randomIndex]);
  }
  return res.join("");
};

// permute for us
export const permutation = arr => {
  const resultPerm = [];
  arr.map(first => {
    arr.map(second => {
      arr.map(third => {
        arr.map(fourth => {
          resultPerm.push([first, second, third, fourth].join(""));
        });
      });
    });
  });
  return resultPerm;
};
