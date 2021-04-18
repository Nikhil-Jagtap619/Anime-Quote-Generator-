const quotesData = [
  {quote: "Life is not a game of luck. If you wanna win, work hard",
  author: "Sora"},
  {quote: "Power comes in response to you need, not desire. You have to create that need",
  author: "Goku"},
  {quote: "We can't waste time worring about the What-if's",
  author: "Ichigo"},
  {quote: "No matter how hard it is, never lose sight of your goal",
  author: "Luffy"},
  {quote: "Human beings are stronge because we can change ourselves",
  author: "Saitama"},
  {quote: "It's best to go up against strong guys, if you want to get stronger",
  author: "Shoyo Hinata"},
  {quote: "Because of the existence of love - sacrifice is born. As well as hate. Then one comprehends... one knows PAIN",
  author: "Pain(Yahiko)"},
  {quote: "Don't improvise what you cannot handle",
  author: "Madara"},
  {quote: "No man chooses evil because it is evil; he only mistakes it for happiness, the good he seeks",
  author: "Sasuke"},
  {quote: "Whether you win or lose... You can always come out ahead by learning from the experience",
  author: "Almight"}
];

var currentQuote = '';
var currentAuthor = '';

function getRandomQuote(){
  return quotesData[Math.floor(Math.random() * quotesData.length)];
}

function getQuote(){
  var randomQuote = getRandomQuote();
  
  $("#text").text(randomQuote.quote);
  $("#author").text(randomQuote.author);
  $("#new-quote").addClass("animate__bounceIn");
}


$(document).ready(function(){
  getQuote();
});