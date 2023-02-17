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
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
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
    },
  }


// Movie titles and values arrays

const titles = Object.keys(movieData);
let values = Object.values(movieData);
let imgSrc = values.map(el => el.src);

// DOM Access for  poster and individual movie display walls

const instructionsBox = document.getElementById('instructions');
const instructionsHeader = document.querySelector('h2');

const posterContainer = document.querySelector('section');
const buttonContainer = document.getElementsByClassName('container');
const posterButtons = document.getElementsByClassName('poster-btn');
const posterWall = document.getElementById('poster-wall');

const movieWall = document.getElementById('movie-wall');
const backButton = document.getElementById('back-btn')


/*
  Poster wall
*/
  
function posterDislpay() {
  
  values = Object.values(movieData);
  imgSrc = values.map(el => el.src);
  console.log(imgSrc);
  
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

    parentDiv.append(posterDiv, textDiv);
    textDiv.append(plotParagraph, castParagraph, runtimeParagraph, yearParagraph, ratingParagraph);
    
    movieWall.appendChild(parentDiv);
  }


/* Funcions */

function createBackBtn() {
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Go Back';
    backBtn.classList.add('back-btn');
    backBtn.id = 'back-btn'
    backBtn.classList.add('btn');
    movieWall.appendChild(backBtn);

    const backButton = document.getElementById('back-btn')
    
    backButton.addEventListener('click', () => {
      posterWall.style.display = 'flex';
      instructionsBox.style.display ='block';
      
      let movieInfo = document.getElementById('movie-info');
      movieWall.removeChild(movieInfo);
      movieWall.removeChild(backBtn);

    })
}

// Function for add event listener to poster wall

function addListener() {

  values = Object.values(movieData);

    for (let i = 0; i < values.length; i++) {
      posterButtons[i].addEventListener('click', () => {
          posterWall.style.display = 'none';
          instructionsBox.style.display = 'none';
      
          movieDisplay(i);
          createBackBtn();
      })
    }
  }

addListener();


/*
  Form for adding a film
*/


// DOM Access for form elements

const movieForm = document.getElementById('movie-form');
const submitBtn = document.getElementById('submit-btn');
const movieTitle = document.getElementById('movie-title');
const plotSummary = document.getElementById('plot');
const starringActors = document.getElementById('actors');
const runtime = document.getElementById('runtime');
const yearReleased = document.getElementById('year');
const rating = document.getElementById('rating');
const imgLink = document.getElementById('link');


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

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let objName = movieTitle.value;
 
  let movie = new Movie(rating.value, runtime.value, yearReleased.value, plotSummary.value, starringActors.value, imgLink.value);
  
  console.log(movie);

  movieData[objName] = movie;
  posterWall.removeChild(buttonContainer[0]);
  posterDislpay();
  addListener();


  console.log(movieData);
  movieForm.reset();
})





