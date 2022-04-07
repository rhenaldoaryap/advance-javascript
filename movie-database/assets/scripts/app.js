const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMoveButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMoveButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

// list of all movies
const movies = [];

/* update UI, should be always call this function when we add a movie
check addMovieHandler function */
const updateUI = () => {
  movies.length === 0
    ? (entryTextSection.style.display = "block")
    : (entryTextSection.style.display = "none");
};

const renderNewMovieElement = (title, imageUrl, rating) => {
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

  const listOfMovie = document.getElementById("movie-list");
  listOfMovie.prepend(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  // clear users input at modal
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
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
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.unshift(newMovie);
  console.log(movies);
  // close modal
  toggleMovieModal();
  // clear users input at modal
  clearMovieInput();
  // update the UI
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMoveButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
