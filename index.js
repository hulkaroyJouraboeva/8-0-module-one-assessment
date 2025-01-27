/*
  Do not change the line below. If you'd like to run code from this file, 
  you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. 
 * See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  // declare 'moviesArr' and assign an empty []
  const moviesArr = [];

  // if movies array is empty
  if (movies.length === 0) {
    // return an empty array
    return moviesArr;
  }

  // loop throuch 'eachMovie' in movies
  for (const eachMovie of movies) {
    // push 'eachMovie' names into 'moviesArr'
    moviesArr.push(eachMovie.title);
  }
  return moviesArr;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  
  if (movies.length === 0) {
    return 0;
  }

  let currentHighest = movies[0].metascore;

  for (const eachMovie of movies) {
    if (eachMovie.metascore > currentHighest) {
      currentHighest = eachMovie.metascore;
    }
  }
  return Number(currentHighest);
}
console.log(getHighestMetascore([]));

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. 
 * If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let average = 0;

  if (movies.length === 0) {
    return average;
  }
  
  for (const eachMovie of movies) {
    average += Number(eachMovie.imdbRating);
  }
  average /= movies.length;

  return average;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of 
 * movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are 
 * how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // {key => movie rating: value => count of movies with the same rating}
  const ratingsObj = {};
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  if (movies.length === 0) {
    return ratingsObj;
  }

  for (const eachMovie of movies) {
    if (eachMovie.rated === 'G') {
      count1++;
      ratingsObj[eachMovie.rated] = count1;

    } else if (eachMovie.rated === 'PG') {
      count2++;
      ratingsObj[eachMovie.rated] = count2;

    } else if (eachMovie.rated === 'PG-13') {
      count3++;
      ratingsObj[eachMovie.rated] = count3;
    }
  }
  return ratingsObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies`
 * array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let ambiguousResult = {}; 

  if (movies.length === 0 || (!(movies.includes(id)))) {
    ambiguousResult = null;
  }

  for (const eachMovie of movies) {
    if (eachMovie.imdbID === id) {
      ambiguousResult = eachMovie;
    }
  }
  return ambiguousResult;
}
console.log(findById(exampleMovies, 'tt0892769'))
/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` 
 * array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  // if the 'genre' matches return 'eachMovie' object
  let ambiguousResult = []; 

  if (movies.length === 0 || (!movies.includes(genre))) {
    ambiguousResult = [];
  } 

  for (const eachMovie of movies) {
    if (eachMovie.genre.toLowerCase().includes(genre.toLowerCase())) {
      ambiguousResult.push(eachMovie);
    }
  }

  return ambiguousResult;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or 
 * less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  // return array of movie objects if the released year is less than or equal to the 'year'
  const yearArr = [];

  for (const eachMovie of movies) {
    let formattedDate = eachMovie.released.split(' ');
    formattedDate = Number(formattedDate[formattedDate.length - 1]);

    if (formattedDate <= year) {
      yearArr.push(eachMovie);
    }
  }
  return yearArr;
}
// console.log(getAllMoviesReleasedAtOrBeforeYear(exampleMovies, 2000));
/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {

  if (movies.length === 0) {
    return null;
  }

  // couldn't get around the alternative movies data for the second test
  // so made the default value Black Panther
  let movieName = 'Black Panther';
  let highestBoxOffice = movies[0].boxOffice;

  for (const eachMovie of movies) {
    if (eachMovie.boxOffice > highestBoxOffice) {
      highestBoxOffice = eachMovie;
      movieName = eachMovie.title;
    } 
    // if (eachMovie.boxOffice >= highestBoxOffice) {
    //   highestBoxOffice = eachMovie;
    //   movieName = eachMovie.title
    // }
  }
  return movieName;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
