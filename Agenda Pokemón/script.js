document.getElementById("show").style.display = "none";
document.getElementById("informa").style.display = "none";

const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const name = document.querySelector('.name');
const number = document.querySelector('.number');
const type = document.querySelector('.type');
const skill = document.querySelector('.skill');
const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');
const imagem = document.querySelector('.img');

const saude = document.querySelector('.saude');
const ataque = document.querySelector('.ataque');
const defesa = document.querySelector('.defesa');
const atqesp = document.querySelector('.atqesp');
const defesp = document.querySelector('.defesp');
const velocidade = document.querySelector('.velocidade');

search_button.addEventListener('click', function () {
    searchResults(search_input.value);
});

search_input.addEventListener('keypress', enter)
function enter(event) {
    key = event.keyCode;
    if (key == 13) {
        searchResults(search_input.value);
    }
}

function searchResults(poke) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then(response =>{
        if(!response.ok){
            throw new Error(`http error: status ${response.status}`)
        }
        return response.json();
    })
    .catch(error =>{
        alert(error.message);
    })
    .then(response =>{
        displayResults(response);
    })
}

function displayResults(resposta){
    console.log(resposta);
    document.getElementById("show").style.display = "table";
    document.getElementById("informa").style.display = "table";
    name.innerText = "Nome: " + resposta.name.toUpperCase(resposta.name);
    imagem.innerHTML = `<img style="width: 250px;height: 250px;" src="${resposta.sprites.other.dream_world.front_default}" />`;
    number.innerHTML = "N°.: " + resposta.id;
    type.innerHTML = "Tipo: " + resposta.types[0].type.name.toUpperCase(resposta.types[0].type.name);
    skill.innerHTML = "Poderes: "+resposta.moves.map(item => ' ' + item.move.name).toString();
    peso.innerHTML = "Peso: " + (resposta.weight/10) + " kg";
    altura.innerHTML = "Altura: " + (resposta.height/10) + "m"

    saude.innerHTML = "Saúde: " + resposta.stats[0].base_stat;
    ataque.innerHTML = "Ataque: " + resposta.stats[1].base_stat;
    defesa.innerHTML = "Defesa: " + resposta.stats[2].base_stat;
    atqesp.innerHTML = "Ataque Especial: " + resposta.stats[3].base_stat;
    defesp.innerHTML = "Defesa Especial: " + resposta.stats[4].base_stat;
    velocidade.innerHTML = "Velocidade: " + resposta.stats[5].base_stat;
}


