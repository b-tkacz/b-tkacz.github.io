fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(response => response.json())
  .then(json => console.log(json))