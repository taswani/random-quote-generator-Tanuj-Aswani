var quotes = [
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll",
    tags: ["Motivational", "Business"]
  },
  {
    quote: "Change your life today. Don't gamble on your future, act now, without delay." ,
    source: "Simone De Beauvoir",
    year: 2007,
    tags: ["Motivational", "Business"]
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela",
    year: 2001,
    tags: ["Motivational"]
  },
  {
    quote: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    source: "Wayne Dyer",
    citation: "Facebook Post",
    year: 2010,
  },
  {
    quote: "Everything you have ever wanted is on the other side of fear.",
    source: "George Addair",
    tags: ["Motivational", "Business"]
  }
];

//Necessary  to acquire a random number from 1-5 in order to pull the assigned information from the object.
function getRandomNumber () {
  return Math.floor(Math.random() * quotes.length);
}

//Changing the background color randomly and having the 'show random quote' button match that color.
function getRandomColor () {
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
  document.getElementsByTagName('body')[0].style.backgroundColor = rgbColor;
  document.getElementById('loadQuote').style.backgroundColor = rgbColor;
}

//Uses get randomNumber in order to pull quote and other information from object.
function getRandomQuote () {
  return quotes[getRandomNumber()];
}

//prints quote while changing the color with each quote of the background and of the button.
function printQuote () {
  var quote = getRandomQuote();
  var message = '';
  message += '<p class="quote">' + quote.quote + '</p>';
  message += '<p class="source">' + quote.source;

  if (quote.citation) {
    message += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    message += '<span class="year">' + quote.year + '</span>';
  }
  if (quote.tags) {
    for (var i = 0; i < quote.tags.length; i++) {
      message += '<span class="citation">' + quote.tags[i] + '</span>';
    }
  }
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;
  getRandomColor();
  resetTimer();
}

//Setting an interval to have the quote refresh at set period of time passed.
var timerID = window.setInterval(printQuote, 10000);
function resetTimer () {
  window.clearInterval(timerID);
  timerID = window.setInterval(printQuote, 10000);
}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
