// Movie object data

let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman ", " Owen Wilson ", " Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
      poster: document.createElement('img'),
      src: './resources/images/darjeelinglimited_NatalieAndrewson_web_670.jpg',
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman ",  "Gwnyeth Paltrow ", " Anjelica Huston"],
      runtime: 170,
      poster: document.createElement('img'),
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
      poster: document.createElement('img'),
      src: './resources/images/fantastic-mr-fox_natalieandrewson_web_670.jpg',
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes ", " F. Murray Abraham ", " Mathieu Amalric"],
      poster: document.createElement('img'),
      src: './resources/images/grandbudapest-hotelnatalieandrewson_web_670.jpg',
    },
  }


// Movie titles and values arrays

const titles = Object.keys(movieData);
const values = Object.values(movieData);
const posters = values.map(el => el.poster);
const imgSrc = values.map(el => el.src);

// DOM Access

const instructionsBox = document.getElementById('instructions');
const instructionsHeader = document.querySelector('h2');

const posterContainer = document.querySelector('section');
const posterButtons = document.getElementsByClassName('poster-btn');
const posterWall = document.getElementById('poster-wall');

const movieWall = document.getElementById('movie-wall');
const backButton = document.getElementById('back-btn')


// Poster wall creation and insertion
  

function posterDislpay() {
  for (let index = 0; index < posters.length; index++) {
    let button = document.createElement('button');
    button.classList.add('poster-btn');
    button.type = 'button'; 
    button.role = 'button';
    posters[index].src = imgSrc[index];
    button.appendChild(posters[index]);
    posterContainer.appendChild(button);
  }
}

posterDislpay();

  // Individual movie wall and facts display
  
  function movieDisplay(i) {

    // Create html elements
    let posterDiv = document.createElement('div'); 
    let parentDiv = document.createElement('div');
    let textDiv = document.createElement('div');
    
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
    posters[i].src = imgSrc[i];
    plotParagraph.textContent = `Plot: ${values[i].plot}`;
    castParagraph.textContent = `Starring: ${values[i].cast}`;
    runtimeParagraph.textContent = `Runtime: ${values[i].runtime}`;
    yearParagraph.textContent = `Year: ${values[i].runtime}`;
    ratingParagraph.textContent =  `Rating: ${values[i].rating}`;
    
    //Add to the DOM

    posterDiv.appendChild(posters[i]);
    textDiv.appendChild(h2);

    parentDiv.append(posterDiv, textDiv);
    textDiv.append(plotParagraph, castParagraph, runtimeParagraph, yearParagraph, ratingParagraph);
    
    movieWall.appendChild(parentDiv);
  }


/* Funcions */

function removeClass(el, name) {
  el.classList.remove('name');
}

function createBackBtn() {
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Go Back';
    backBtn.classList.add('back-btn');
    backBtn.id = 'back-btn'
    movieWall.appendChild(backBtn);

    const backButton = document.getElementById('back-btn')
    backButton.addEventListener('click', () => {
      posterWall.style.display = 'flex';
      instructionsBox.style.display ='block';
      backButton.style.display = 'none';
      movieWall.style.display = 'none';
      
      let movieInfo = document.getElementById('movie-info');
      movieWall.removeChild(movieInfo);
      movieWall.removeChild(backBtn);
      posterWall.replaceChildren(movieDisplay());

      // document.location.reload();

    })
}

// Event Listeners

//Darjeeling Limited button

posterButtons[0].addEventListener('click', () => {
    posterWall.style.display = 'none';
    instructionsBox.style.display = 'none';
    movieWall.style.display = 'flex';

    movieDisplay(0);
    createBackBtn();

})

//Royal Tenenbaums button

posterButtons[1].addEventListener('click', (e) => {
  e.preventDefault();
  posterWall.style.display = 'none'
  instructionsBox.style.display = 'none';
  movieWall.style.display = 'flex';


  movieDisplay(1);
  createBackBtn();
  
})

//Fantastic Mr. Fox Button

posterButtons[2].addEventListener('click', () => {
  posterWall.style.display = 'none';
  instructionsBox.style.display = 'none';
  movieWall.style.display = 'flex';


  createBackBtn();
  movieDisplay(2);
})

//Grand Budapest Hotel button

posterButtons[3].addEventListener('click', () => {
  posterWall.style.display = 'none';
  instructionsBox.style.display = 'none';
  movieWall.style.display = 'flex';


  createBackBtn()
  movieDisplay(3);
})

// backButton.addEventListener('click', () => {
//   posterWall.style.display = 'flex';
// })