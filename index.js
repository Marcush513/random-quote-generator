let url = "https://api.quotable.io/random?maxLength=50";
let quote = document.getElementById("Welcome");
const cite = document.querySelector("blockquote cite");
let quotesDiv = document.getElementById("Welcome");

// function to grab quote from API and creates quote in DOM
function createQuote() {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quotesDiv.innerText = item.content;
      cite.innerText = item.author;
    });
}
// fetches and creates kanye quote
function kanyeQuote() {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((quote) => {
      quotesDiv.innerText = quote.quote;
      cite.innerText = "Kanye";
    });
}

document.getElementById("button").addEventListener("click", createQuote);
document.getElementById("kanyebutton").addEventListener("click", kanyeQuote);
