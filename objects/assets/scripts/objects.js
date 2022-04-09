const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

// updating UI
// using default values from searching movies
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  // cleareance the movie list
  movieList.innerHTML = "";

  /*
    only render the movie was search
    if the filter was falsy which mean we don't do search anything return all movies
    but if we do the search, filter the movies based on the filter was entered by user
  */
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  /*
    outputting all movies to and individual item with loop
    movies.forEach((movie) => {
    changed plan, we do loop for movie that already filter (search) by user
  */
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // using object destructuring
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    /*
    get this value from addMovieHanlder function at at newMovie object
    let text = movie.info.title + " - ";
    change applied to the object destructuring
    info below referring to the info property inside of newMovie object
    and inside of addMovieHandler
    if you want to use another key when using destructuring object,
    you could do that by using semilocon and type new name you want,
    for example:
    const { title: titleOfFilm } = info

    using bind()
    this keyword can be very confusing and cumbersome, we can ensure that this keyword
    referring to the same object or same function we looking to.

    this code below before using bind()
    const { title: movieTitle } = info;
    let text = movieTitle + " - ";

    after using bind see the example below.
    why we referring to movie?
    because movie is a new array that automatically created by JavaScript for us
    and we can use that as a pointer / referring to.
    and then we execute the getFormattedTitle method after we bind it.
    */
    let { getFormattedTitle } = movie;
    getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle() + " - ";
    for (const key in info) {
      if (key !== "title") {
        text += `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    /*
        equal to title: title and so on
        only works if we have the same name for key:value
    */
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  movies.unshift(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
