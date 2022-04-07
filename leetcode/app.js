let romanToInt = (s) => {
  let count = 0;
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  s = [...s];

  for (let i = 0; i < s.length; i++) {
    if (numerals[s[i]] >= numerals[s[i + 1]]) {
      count += numerals[s[i]];
    } else if (numerals[s[i]] < numerals[s[i + 1]]) {
      count -= numerals[s[i]];
    } else {
      count += numerals[s[i]];
    }
  }

  return count;
};

console.log(romanToInt("MMXXII"));
