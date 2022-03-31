function greetUser(greetingPrefix, userName = "user") {
  console.log(`${greetingPrefix} ${userName} !`);
}

greetUser("Hi", "Aldo");
greetUser("Hello");
// Output
// Hi Aldo !
// Hello user !

// Without Rest Parameter
function sumUp1(numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumUp1([1, 2, 3, 4, 5]));
// Output
// 15

// Rest Parameter
function sumpUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumpUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// Output
// 55

// Rest Parameter without Spread Operator
function sumExm(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbersExm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumExm(inputNumbersExm));
// Output -> 01, 2, 3, 4, 5, 6, 7, 8, 9, 10
// Unexpected Result

// RestParameter and Spread Operator
function sumpUp2(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumpUp2(...inputNumbers));
// Output
// 55

/*
  High Order Function method:
  reduce, map, filter, forEach.
  each of those method will create a new array with concret value which passed as an argument
*/

// map -> only available take ONE CALLBACK
const names = ["Rhenaldo", "Woody", "Jackson", "Malih"];

const newNameWithExcMark = names.map((name) => {
  return `${name}!`;
});

console.log(...newNameWithExcMark);

// filter -> MUST return FALSY/TRUHTY based condition on callback
const students = [
  {
    name: "Rhenaldo",
    score: 99,
  },
  {
    name: "Johan",
    score: 91,
  },
  {
    name: "Ceb",
    score: 12,
  },
  {
    name: "FBZ",
    score: 10,
  },
  {
    name: "Whitemon",
    score: 20,
  },
];

const eligibleForScholarship = students.filter((student) => student.score > 30);
console.log(eligibleForScholarship);

// find -> Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const lowStudentScore = students.find((student) => student.score < 70);
console.log(lowStudentScore);

const scores = [1, 12, 1313, 1233, 1214, 98, 482342, 774, 99812, 2];
const compareScore = (a, b) => {
  return a - b;
};

const sortingScore = scores.sort(compareScore);
console.log(...sortingScore);

// ForEach (declaration iteration)
names.forEach((name) => {
  console.log(`My name is ${name}`);
});

// reduce
const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);

// Recursive to countdown
const recursive = (n) => {
  if (n < 1) {
    return [];
  } else {
    const countArray = recursive(n - 1);
    countArray.unshift(n);
    return countArray;
  }
};

console.log(recursive(5));

// Recursive to create a range numbers
const rangeNumbers = (startNum, endNum) => {
  return startNum === endNum
    ? [startNum]
    : rangeNumbers(startNum, endNum - 1).concat(endNum);
};

console.log(rangeNumbers(1, 10));

/*
  Functional Programming.

  Functional programming is a style of programming where solutions are simple,
  isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT.

  Functional programming is about:

  Isolated functions - there is no dependence on the state of the program,
  which includes global variables that are subject to change.

  Pure functions - the same input always gives the same output.

  Functions with limited side effects - any changes, or mutations,
  to the state of the program outside the function are carefully controlled.
 */

/*
    unconscious, client wants a different type of tea.
    to handle that request, we must create another prepare tea.

    If we want to handle that different type of tea,
    while after looping we point the push argument to the first parameter,
    why do that?
    because we push the type of tea according to the client request.
  */
const greenTea = () => "Green Tea";

const blackTea = () => "Black Tea";

const getTea = (typeOfTea, numOfCups) => {
  const cupsOfTea = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    cupsOfTea.push(typeOfTea());
  }

  return cupsOfTea;
};

console.log(getTea(greenTea, 10));
console.log(getTea(blackTea, 32));

/*
  Refactoring function to be a Pure Function
*/

const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

const add = (list, bookName) => {
  return [...list, bookName];
};

const remove = (list, bookName) => {
  return list.filter((book) => book !== bookName);
};

console.log(add(bookList, "A Brief History of Time"));
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
console.log(
  remove(
    add(bookList, "A Brief History of Time"),
    "On The Electrodynamic of Moving Bodies"
  )
);

/*
  result:
  [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
  'A Brief History of Time'
  ]
  [
    'The Hound of the Baskervilles',
    'Philosophiæ Naturalis Principia Mathematica',
    'Disquisitiones Arithmeticae'
  ]
  [
    'The Hound of the Baskervilles',
    'On The Electrodynamics of Moving Bodies',
    'Philosophiæ Naturalis Principia Mathematica',
    'Disquisitiones Arithmeticae',
    'A Brief History of Time'
  ]
 */

/*
  Dive deeper into map method to fetch data from JSON data
*/

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

const titleAndRating = watchList.map(
  ({ Title: title, imdbRating: rating }) => ({ title, rating })
);
console.log(JSON.stringify(titleAndRating));

/*
  explanation:
  using PARAMETER DESTRUCTURING, the title and rating are EXTRACTED and returned in an object.
  parantheses are needed to return an object.

  result:
  [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},
  {"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},
  {"title":"Avatar","rating":"7.9"}]
*/

const s = [2, 10, 21, 12312];

Array.prototype.myMap = function (callback) {
  let newArray = [];

  this.forEach((a) => newArray.push(callback(a)));

  return newArray;
};

console.log(
  s.myMap(function (item) {
    return item * 2;
  })
);
