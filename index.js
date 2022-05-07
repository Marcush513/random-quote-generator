const url = "https://api.quotable.io/random";
let quote = document.getElementById("Welcome");
const cite = document.querySelector("blockquote cite");
// function to grab quote from API and creates quote in DOM
const createQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      cite.innerText = item.author;
    });
};
document.getElementById("button").addEventListener("click", createQuote);


