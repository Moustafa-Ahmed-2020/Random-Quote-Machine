const quotes = [{ q: "Quote 1", a: "Author 1" }, { q: "Quote 2", a: "Author 2" }, { q: "Quote 3", a: "Author 3" }, { q: "Quote 4", a: "Author 4" }, { q: "Quote 5", a: "Author 5" }];


const colors = ['RGB(255, 190, 54)', 'RGB(255, 54, 114)', 'RGB(8, 136, 191)', 'RGB(0, 181, 3)', 'RGB(255, 0, 230)'];

const index = function () {
  return Math.floor(Math.random() * colors.length);
};

const fetchQuote = async function (URL) {

  const response = await fetch(URL);
  const newQuote = await response.json();
  document.getElementById('quote').innerHTML = newQuote.quotes[0].text;
  document.getElementById('author').innerHTML = newQuote.quotes[0].author;
  document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text="${newQuote.quotes[0].text}"-${newQuote.quotes[0].author}&hashtags=goquotes`;

};


const handleClick = function () {
  var j = index();

  fetchQuote("https://goquotes-api.herokuapp.com/api/v1/random?count=1").
  catch(error => {
    console.log(error);
  });


  const variable = colors[j];
  document.body.style.background = variable;
  document.getElementById('header').style.color = variable;
  document.getElementById('quote').style.color = variable;
  document.getElementById('author').style.color = variable;
  document.getElementById('new-quote').style.background = variable;
  document.getElementById('new-quote').style.borderColor = variable;
  document.getElementById('tweet-quote').style.color = variable;
};

handleClick();