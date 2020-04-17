// Question 1
// Convert the function below to an arrow function:
// function(a, b) {
//     return a - b;
// }

const subtract = (a, b) => a - b;

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
// Replace the word cats with the word giraffes in the following sentence:
// These cats are outrageous.
const catString = "These cats are outrageous.";
const modifiedString = catString.replace("cats", "giraffes");

// Question 4
// Given the URL below, write code that checks if there is a userId parameter in the query string.
// If there is no userID parameter, redirect the browser to third.html.
// If there is a userID parameter and its value is less than 10, redirect to first.html.
// If there is a userID parameter and its value is 10 or greater, redirect to second.html.
// https://my.site.com?userId=7

const queryString = "?userId=7";
const params = new URLSearchParams(queryString);

if (params.has("userId")) {
    let userId = Number(params.get("userId"));

    if (userId < 10) {
        document.location.href = "first.html";
    } else if (userId >= 10) {
        document.location.href = "second.html";
    }
} else {
    document.location.href = "third.html";
}

// Question 5
// Write code that removes the button, and only the button, from its parent element in the HTML below:
// <div class="container">
//     <p>Lorem ipsum dolor</p>
//     <button class="btn">Click me</button>
// </div>

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// Question 6
// Create an li element with a text value of Parrots and a class of parrots.
// Add the new item as the second item in the ul below (add it after Cows).
// <ul class="animals">
//     <li class="cows">Cows</li>
//     <li class="elephants">Elephants</li>
// </ul>

const animalList = document.querySelector(".animals");
const cows = document.querySelector(".cows");

const parrots = document.createElement("li");
parrots.innerText = "Parrots";
parrots.className = "parrots";

cows.after(parrots);

// Question 7
// Make a call to the URL below and pass the JSON it returns to a function.
// Inside that function select the div from the HTML below and assign
// the rating property from the JSON object as it's text value.
// In the catch method, log the error that may be returned.
// https://api.rawg.io/api/games/3801
// <div class="rating"></div>

const urltwo = "https://api.rawg.io/api/games/3801";

// Here I have chosen to use a try catch block – for practice
async function fetchGames() {
    try {
        const response = await fetch(urltwo);
        const games = await response.json();
        assignRating(games);
    } catch (error) {
        console.log(error);
    }
}

fetchGames();

function assignRating(games) {
    const ratingContainer = document.querySelector(".rating");
    ratingContainer.innerText = games.rating;
}
