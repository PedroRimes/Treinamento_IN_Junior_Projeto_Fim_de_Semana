const $ = document
let list = $.querySelector('#entrada-dados');
let submit = $.querySelector('#botao');
const url = "https://lobinhos.herokuapp.com/wolves/"
let ladoPag = 0
let contador = 0
fetch(url)
    .then(resp => resp.json())
    .then(wolves => {
        for (let i = 1; i < 5; i++) {
            if (ladoPag < 4) {
                ladoPag++
            } else {
                ladoPag = 1
            }
            let lobo = Math.ceil(Math.random() * (wolves.wolves.length - 1))
            console.log(ladoPag)
            transformaDiv(wolves.wolves[lobo].name, wolves.wolves[lobo].age,
                wolves.wolves[lobo].link_image, wolves.wolves[lobo].description,
                wolves.wolves[lobo].id, ladoPag)
        }
    })
// GET /////////////////////////////////////


// APARECE O LOBO /////////

    const transformaDiv = (name, age, link_image, description, id, ladoPag) => {
        let entrada_dados = document.querySelector("#entrada-dados");
        let nova_div = $.createElement("div")
        nova_div.setAttribute("class","descricao" + ladoPag )
        nova_div.innerHTML = 
        `<div class="descricao${ladoPag}">
        <div class="imagens-sobrepostas">
            <figure class="quadrado-azul"></figure>
            <img class="imagem-lobo" src="${link_image}" alt="">
            
        </div>
        <div class="descricao-lobo">
            <div>
                <p class="nome-lobo">${name}</p>
                <button type="submit" id="caixaadotar" >Adotar</button>
            </div>
            <div>
                <h3 class="idade-lobo">Idade: ${age} anos</h3>
                <p class="texto-lobo">${description}</p>
                </div>
            </div>
        </div>`    
        contador ++
        entrada_dados.appendChild(nova_div)
        console.log('test')
    }