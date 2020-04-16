// Question 1
// Convert the function below to an arrow function:
// function(a, b) {
//     return a - b;
// }

const doSomething = (a, b) => a - b;

// Question 2
// Refer: lesson 2 / 4
// Make a call to the URL below, pass the JSON it returns to a
// function and inside that function loop through the results and log each game's name.
// In the catch method of your code, redirect to error.html if there is an error.
// https://api.rawg.io/api/games?genres=sports

const url = "https://api.rawg.io/api/games?genres=sports";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    logGames(json);
  })
  .catch(function (error) {
    console.log(error);
    document.location.href = "error.html";
  });

function logGames(json) {
  const games = json.results;

  for (i = 0; i < games.length; i++) {
    console.log(games[i].name);
  }
}
// Question 3
// Refer: lesson 3
// Replace the word cats with the word giraffes in the following sentence:

// These cats are outrageous.
const modifiedString = "These cats are outrageous.".replace("cats", "giraffes");
console.log(modifiedString);
// I could also put the original string in a variable and use the replace method on that variable.

// Question 4
// Refer: lesson 3
// Given the URL below, write code that checks if there is a userId parameter in the query string.

// If there is no userID parameter, redirect the browser to third.html.

// If there is a userID parameter and its value is less than 10, redirect to first.html.

// If there is a userID parameter and its value is 10 or greater, redirect to second.html.

// https://my.site.com?userId=7

const queryString = "?userId=7";
const params = new URLSearchParams(queryString);
console.log(params);

let userId;

if (params.has("userId")) {
  userId = params.get("userId");
}

if (userId < 10) {
  console.log("User ID is less than 10");
}

console.log(typeof userId);

// Question 5
// Refer: lesson 4
// Write code that removes the button, and only the button, from its parent element in the HTML below:

// <div class="container">
//     <p>Lorem ipsum dolor</p>
//     <button class="btn">Click me</button>
// </div>

// Question 6
// Refer: lesson 4
// Create an li element with a text value of Parrots and a class of parrots.

// Add the new item as the second item in the ul below (add it after Cows).

// <ul class="animals">
//     <li class="cows">Cows</li>
//     <li class="elephants">Elephants</li>
// </ul>
// Question 7
// Refer: lesson 4
// Make a call to the URL below and pass the JSON it returns to a function.

// Inside that function select the div from the HTML below and assign the rating property from the JSON object as it's text value.

// In the catch method, log the error that may be returned.

// https://api.rawg.io/api/games/3801
// <div class="rating"></div>
