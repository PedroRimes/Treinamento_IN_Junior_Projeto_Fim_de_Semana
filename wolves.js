const $ = document
let list = $.querySelector('#entrada-dados');
let submit = $.querySelector('#botao');
const url = "https://lobinhos.herokuapp.com/wolves"

// GET /////////////////////////////////////

fetch(url).then(resp => resp.json()).then(resp => console.log(resp))

// fetch(url)
// .then(resp => resp.json())
// .then(messages => {
//     messages.forEach(element => {
//         transformDiv(element.name, element.message, element.id)
//     });
// })

// APARECE O LOBO /////////
for (i = 0; i < 3; i++){
    
    let entrada_dados = document.querySelector("#entrada-dados" + i );
    entrada_dados.innerHTML = `<div class="descricao1">
    <div class="imagens-sobrepostas">
    <figure class="quadrado-azul"></figure>
    <img class="imagem-lobo" src="./img/image (1).png" alt="">
    <!-- <figure class="imagem-lobo"></figure> -->
    </div>
    <div class="descricao-lobo">
    <div>
    <p class="nome-lobo">Nome do Lobo</p>
    <button type="submit" class="caixaadotar">Adotar</button>
    </div>
    <div>
    <h3 class="idade-lobo">Idade: XX anos</h3>
    <p class="texto-lobo">Não obstante, o surgimento do comércio virtual faz<br> parte de um processo de
    gerenciamento do<br> levantamento das variáveis envolvidas. Não obstante,<br> o surgimento do
    comércio virtual faz parte de um<br> processo de gerenciamento do levantamento das<br> variáveis
    envolvidas.Não obstante, o surgimento do<br> comércio virtual faz parte de um processo de<br>
    gerenciamento do levantamento das variáveis<br> envolvidas.Não obstante, o surgimento do
    comércio<br> virtual faz parte de um processo de gerenciamento<br> do levantamento das variáveis
    envolvidas.</p>
    </div>
    </div>
    </div>`
    console.log('test')
}
    // let lobo_imagem = document.createElement("img");
    // entrada_dados.src = "./img/image (2).png"
    // entrada_dados.appendChild(lobo_imagem)
    