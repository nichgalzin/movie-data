// Movie object data

let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman ", " Owen Wilson ", " Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
      src: './resources/images/darjeelinglimited_NatalieAndrewson_web_670.jpg',
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman ",  "Gwnyeth Paltrow ", " Anjelica Huston"],
      runtime: 170,
      src: './resources/images/the-royal-t_web-natalieandrewson_670.jpg',
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney ",
        " Meryl Streep ",
        " Bill Murray ", 
        " Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
      src: './resources/images/fantastic-mr-fox_natalieandrewson_web_670.jpg',
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes ", " F. Murray Abraham ", " Mathieu Amalric"],
      src: './resources/images/grandbudapest-hotelnatalieandrewson_web_670.jpg',
    }
  }


// Movie titles and values arrays

let titles = Object.keys(movieData);
let values = Object.values(movieData);
let imgSrc = values.map(el => el.src);

console.log(values);

// DOM Access for  poster and individual movie display walls

// header box at top of page

const instructionsBox = document.getElementById('instructions');
const instructionsHeader = document.querySelector('h2');


// Parent containers

const posterContainer = document.querySelector('section');
const buttonContainer = document.getElementsByClassName('container');
const posterButtons = document.getElementsByClassName('poster-btn');
const posterWall = document.getElementById('poster-wall');
const movieWall = document.getElementById('movie-wall');
const formBox = document.getElementById('form-box')

// DOM Access for form elements

const movieForm = document.getElementById('movie-form');
const formHeader = document.getElementById('form=header');
const submitBtn = document.getElementById('submit-btn');
const movieTitle = document.getElementById('movie-title');
const plotSummary = document.getElementById('plot');
const starringActors = document.getElementById('actors');
const runtime = document.getElementById('runtime');
const yearReleased = document.getElementById('year');
const rating = document.getElementById('rating');
const imgLink = document.getElementById('link');
const inputFields = document.querySelectorAll('input');

/*
  Poster wall
*/

//Functions to display main poster wall
  
function posterDislpay() {
  
  values = Object.values(movieData);
  imgSrc = values.map(el => el.src);
  titles = Object.keys(movieData);
  
  let container = document.createElement('div');

  for (let index = 0; index < imgSrc.length; index++) {
    
    let button = document.createElement('button');
    container.classList.add('container');
    button.classList.add('poster-btn');
    button.type = 'button'; 
    button.role = 'button';

    let posterImg = document.createElement('img');
    posterImg.src = imgSrc[index];
    button.appendChild(posterImg);
    container.appendChild(button);
  }

  posterContainer.appendChild(container);
}

posterDislpay();

  // Individual movie wall and facts display
  
  function movieDisplay(i) {

    // Create html elements
    let posterDiv = document.createElement('div'); 
    let parentDiv = document.createElement('div');
    let textDiv = document.createElement('div');
    
    let posterImg = document.createElement('img')
    let h2 = document.createElement('h2');
    let plotParagraph = document.createElement('p');
    let castParagraph = document.createElement('p');
    let runtimeParagraph = document.createElement('p');
    let yearParagraph = document.createElement('p');
    let ratingParagraph = document.createElement('p');

    // Assign classes    
    h2.classList.add('movie-title');
    posterDiv.classList.add('info-poster');
    textDiv.classList.add('text-box')
    parentDiv.id = 'movie-info';

    // Assign values
    h2.textContent = titles[i];
    posterImg.src = imgSrc[i];
    plotParagraph.textContent = `Plot: ${values[i].plot}`;
    castParagraph.textContent = `Starring: ${values[i].cast}`;
    runtimeParagraph.textContent = `Runtime: ${values[i].runtime}`;
    yearParagraph.textContent = `Year: ${values[i].year}`;
    ratingParagraph.textContent =  `Rating: ${values[i].rating}`;
    
    //Add to the DOM
    posterDiv.appendChild(posterImg);
    textDiv.appendChild(h2);
    textDiv.append(plotParagraph, castParagraph, runtimeParagraph, yearParagraph, ratingParagraph);
    parentDiv.append(posterDiv, textDiv);
    movieWall.appendChild(parentDiv);
  }

  /*
  Edit info form
  */

// function to create form elements

function createEditForm(i) {

  let editForm = document.createElement('form');
  editForm.setAttribute('id', 'edit-form');
  editForm.style.display = 'none';
  
  //Title label and input
  let titleLabel = document.createElement('label');
  let titleInput = document.createElement('input');
  let div1 = document.createElement('div');
  titleLabel.setAttribute('for', 'title');
  titleInput.setAttribute('type', 'textarea');
  titleInput.setAttribute('id', 'edit-title')
  titleInput.setAttribute('required', true);
  titleInput.value = titles[i];
  titleLabel.textContent = 'Title:';
  div1.append(titleLabel, titleInput);

  //Plot label and input
  let plotLabel = document.createElement('label');
  let plotInput = document.createElement('textarea');
  let div2 = document.createElement('div');
  div2.style.display = 'flex';
  div2.id = 'div2';
  plotLabel.setAttribute('for', 'edit-plot');
  plotLabel.setAttribute('id', 'plot-label');
  plotInput.setAttribute('id', 'edit-plot');
  plotInput.setAttribute('required', true);
  plotInput.rows = '8';
  plotInput.cols = '30';
  plotInput.value = values[i].plot;
  plotLabel.textContent = 'Plot:';
  div2.append(plotLabel, plotInput);

  //Cast label and input
  let starringLabel = document.createElement('label');
  let starringInput = document.createElement('input');
  let div3 = document.createElement('div');
  starringLabel.setAttribute('for', 'edit-cast');
  starringInput.setAttribute('id', 'edit-cast');
  starringInput.setAttribute('type', 'text');
  starringInput.setAttribute('required', true);
  starringInput.value = values[i].cast;
  starringLabel.textContent = 'Starring:';
  div3.append(starringLabel, starringInput);

  //Runtime label and input
  let runtimeLabel = document.createElement('label');
  let runtimeInput = document.createElement('input');
  let div4 = document.createElement('div');
  runtimeLabel.setAttribute('for', 'edit-runtime');
  runtimeInput.setAttribute('id', 'edit-runtime');
  runtimeInput.setAttribute('type', 'number');
  runtimeInput.setAttribute('required', true);
  runtimeInput.value = values[i].runtime;
  runtimeLabel.textContent = 'Runtime:';
  div4.append(runtimeLabel, runtimeInput);

  //Year label and input
  let yearLabel = document.createElement('label');
  let yearInput = document.createElement('input');
  let div5 = document.createElement('div');
  yearLabel.setAttribute('for', 'edit-year');
  yearInput.setAttribute('id', 'edit-year');
  yearInput.setAttribute('type', 'number');
  yearInput.setAttribute('required', true);
  yearInput.value = values[i].year;
  yearLabel.textContent = 'Year:'
  div5.append(yearLabel, yearInput);

  //Rating label and input
  let ratingLabel = document.createElement('label');
  let ratingInput = document.createElement('input');
  let div6 = document.createElement('div');
  ratingLabel.setAttribute('for', 'edit-rating');
  ratingInput.setAttribute('id', 'edit-rating');
  ratingInput.setAttribute('type', 'number');
  ratingInput.setAttribute('required', true);
  ratingInput.setAttribute('step', '0.1');
  ratingInput.value = values[i].rating;
  ratingLabel.textContent = 'Rating:'
  div6.append(ratingLabel, ratingInput);

  //Save button
  let saveBtn = document.createElement('button');
  saveBtn.setAttribute('type', 'submit');
  saveBtn.id = 'save-btn';
  saveBtn.classList.add('btn');
  saveBtn.innerHTML = 'Save'

  //DOM insertion
  editForm.append(div1, div2, div3, div4, div5, div6, saveBtn);
  formBox.append(editForm);

  //Add event listener for save button
  
  saveBtn.addEventListener('click', ($event) => {
    
    if (!editForm.checkValidity()) {
    // If form is not valid, prevent default behavior and show error message
    $event.preventDefault();
    alert('Please fill out all required fields.');
    return;
  }
    $event.preventDefault();

    //Assign form input values to object
    titles[i] = titleInput.value;
    values[i].plot = plotInput.value;
    values[i].cast = starringInput.value;
    values[i].year = yearInput.value;
    values[i].runtime = runtimeInput.value;
    values[i].rating = ratingInput.value;

    //Clear the old displayed movie info data
    while (movieWall.firstChild) {
      movieWall.removeChild(movieWall.firstChild);
    }

    //Display updated data
    movieDisplay(i);
    createBackBtn();
  })
}

/* 
Functions
 */

//Function to create back and edit buttons and add event listeners

function createBackBtn() {

  //Create back button element, and assign values
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Go Back';
    backBtn.id = 'back-btn'
    backBtn.classList.add('btn');

    //Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('btn');
    editBtn.id = 'edit-btn';

    movieWall.append(backBtn, editBtn);


    //DOM Access

    const backButton = document.getElementById('back-btn')
    let editForm = document.getElementById('edit-form');


    //Add event listener to back button 

    backButton.addEventListener('click', () => {
      posterWall.style.display = 'flex';
      instructionsBox.style.display ='block';
      
      let movieInfo = document.getElementById('movie-info');
      movieWall.removeChild(movieInfo);
      movieWall.removeChild(backBtn);
      movieWall.removeChild(editBtn);
      formBox.removeChild(editForm);
      formHeader.textContent = 'Add your favourite film to the poster wall!';
      movieForm.style.display = 'block';

    })

    editBtn.addEventListener('click', () => {
      formHeader.innerHTML = 'Edit movie information';
      editForm.style.display = 'block';
    })
}

// Function for adding event listenesr to posters on wall

function addListener() {

  values = Object.values(movieData);

    for (let i = 0; i < values.length; i++) {
      posterButtons[i].addEventListener('click', () => {
          posterWall.style.display = 'none';
          instructionsBox.style.display = 'none';
          movieForm.style.display = 'none';
          formHeader.innerHTML = '';

          movieDisplay(i);
          createEditForm(i);
          createBackBtn();
      })
    }
  }

addListener();

//Function to check image link against regular expression pattern for file type

function isValidImageUrl(url) {

  return /\.(jpg|png|gif)$/.test(url);
}

/*
Class constructors
*/

//Class for making new movie object

class Movie {
  constructor(rating, runtime, year, plot, cast, src) {
    this.rating = rating;
    this.runtime = runtime;
    this.year = year;
    this.plot = plot;
    this.cast = cast;
    this.src = src;
  }
}

/*
Event Listeners
*/

//Event listener for Submit button

submitBtn.addEventListener('click', ($event) => {

  if (!movieForm.checkValidity()) {
    // If form is not valid, prevent default behavior and show error message
    $event.preventDefault();
    alert('Please fill out all required fields.');
    return;
  }
  
  let objName = movieTitle.value;
  let imgLinkValue = imgLink.value;
  if (!isValidImageUrl(imgLinkValue)) {
    // If imgLink is not a valid image URL, prevent default behavior and show error message
    $event.preventDefault();
    alert('Please enter a valid image URL.');
    return;
  }

  let movie = new Movie(rating.value, runtime.value, yearReleased.value, plotSummary.value, starringActors.value, imgLink.value);
  movieData[objName] = movie;
  posterWall.removeChild(buttonContainer[0]);
  posterDislpay();
  addListener();
  $event.preventDefault();
  movieForm.reset();
})









