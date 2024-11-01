function pegaPokemon (quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {
    pokemons = [];

    allpokemon.results.map((val) => {
        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => {
            pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});

            if(pokemons.length == quantidade) {

                var pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML = "";


                pokemons.map((val) => {
                    pokemonBoxes.innerHTML += 
                    `<div class="pokemon-box">
                        <img src="`+val.imagem+`">
                        <p>`+val.nome+`</p>
                    </div>
                    `
                })
            }
        })
    })
})
}

document.getElementById('enviar').addEventListener('click',() => {
    let qntd = document.getElementById('quantidade').value;

    if(qntd > 0){
        reset();
        pegaPokemon(qntd);
    }else{
        alert('Escolha um número maior do que zero !!');
    }
})

function reset(){
    document.getElementById('reset').addEventListener('click', () => {
        let pokemon = document.querySelector('.pokemon-boxes');
        pokemon.innerHTML = "";
    })
}