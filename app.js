addEventListener('load', (event) => {

    const app = document.getElementById('app');
    let page = document.getElementById("pagination");
    let pageValue = page.dataset.value*10;
    
    const index = () => {
        
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=' + pageValue + '&limit=10')
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
    }

    index()

    page.addEventListener("click", index);


});

