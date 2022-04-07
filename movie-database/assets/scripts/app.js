const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMoveButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMoveButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

// list of all movies
const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

/* update UI, should be always call this function when we add a movie
check addMovieHandler function */
const updateUI = () => {
  movies.length === 0
    ? (entryTextSection.style.display = "block")
    : (entryTextSection.style.display = "none");
};

const cancelMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }

  // remove movies from the array, we still need to do this because it is require
  movies.splice(movieIndex, 1);
  // update the UI after we remove the movie from the list
  const listRoot = document.getElementById("movie-list");
  // get the children of the movie list element, which is the list item
  listRoot.children[movieIndex].remove();
  cancelMovieDeletionModal();
  updateUI();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeleteionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeleteionButton.removeEventListener("click", cancelMovieDeletionModal);
  cancelDeleteionButton.addEventListener("click", cancelMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovie.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listOfMovie = document.getElementById("movie-list");
  listOfMovie.prepend(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  // clear users input at modal
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  // retrieve what users input
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    ratingValue < 1 ||
    ratingValue > 5
  ) {
    alert("Invalid input, rating should between 1 and 5");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.unshift(newMovie);
  console.log(movies);
  // close modal
  closeMovieModal();
  // toggle the backdrop
  toggleBackdrop();
  // clear users input at modal
  clearMovieInput();
  // update the UI
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletionModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMoveButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
