"use strict";
const btn = document.querySelector("#btn");


btn.addEventListener("click", ()=>{
let jokeContainer = document.querySelector("#joke");
const URL = "https://v2.jokeapi.dev/joke/Any";

	jokeContainer.classList.remove("fade");
	fetch(URL)
    .then((res) => res.json())
    .then((item) => {
      if (item.type === "single") {
        jokeContainer.textContent = item.joke;
      } else if (item.type === "twopart") {
        jokeContainer.textContent = `${item.setup} - ${item.delivery}`;
      } else {
        jokeContainer.textContent = "Oops! Couldn't fetch a joke.";
      }
      jokeContainer.classList.add("fade");
    })
    .catch((error) => {
      jokeContainer.textContent = "Oops! Something went wrong.";
      console.error(error);
    });
});
