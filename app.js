addEventListener('load', (event) => {
    const app = document.getElementById('app');

    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40')
    .then(function (response) {
        for (pokemon of response.data.results) {

                axios.get(pokemon.url)
                .then(function (response) {
                    app.innerHTML += 
                    `
                    <div class="pokemon-box" id="${response.data.id}">
                        <img src="${response.data.sprites.front_default}" alt="${response.data.name}">
                        <p>${response.data.name}</p>
                    </div>
                    `;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }  
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

    
    const sum = require('./pokemonsApi');
    console.log(sum)

});

