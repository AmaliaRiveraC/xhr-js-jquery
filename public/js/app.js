$.getJSON("http://pokeapi.co/api/v2/pokemon/",
  function (response) {
    var pokemons = response.results;
    crearPokemons(pokemons);
  });


/*var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (e) {
  if (this.readyState === 4) {
    if (this.status === 200) {
      var response = JSON.parse(this.response);
      var pokemons = response.results;
      crearPokemons(pokemons);
    }

  }
};

xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

xhr.send();*/

function crearPokemons(pokemons) {
  var $seccion = $("#pokemons");

  $(pokemons).each(function (i, pokemon) {
    var $div =$('<div class="jumbotron col-xs-5"/>');
    var $parrafo =$( "<p />");
    var nombrePokemon = pokemon.name;
    $parrafo.text(nombrePokemon);
    console.log(nombrePokemon);

    $div.append($parrafo);
    $seccion.append($div);
  });
}
