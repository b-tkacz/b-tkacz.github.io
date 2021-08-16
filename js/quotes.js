fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(response => response.json())
  .then(json => document.getElementById("quote").innerHTML = (json))
  let getQuote = document.getElementById("getQuote")