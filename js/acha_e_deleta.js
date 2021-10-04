const $ = document
let show = $.querySelector('#show-lobinho');
let del = $.querySelector('#delete');
const url = "https://lobinhos.herokuapp.com/wolves/331";



//APARECE O LOBO SELECIONADO//
const transformaDiv=(link_image,description,name) => {
    let show_lobinho = document.getElementById("#show-lobinho");
    let nova_li = $.createElement("li")
    nova_li.innerHTML = `
    <h2 class="titulos-amarelos">${name}</h2>
        <div class="descricao1">
            <div class="imagens-sobrepostas">
                <figure class="quadrado-azul"></figure>
                <figure class="imagem-lobo" src="${link_image}"></figure>
                <div class="botoes">
                    <button  class="adotar">Adotar</button>
                    <button  class="excluir">Excluir</button>
                </div>
            </div>
            <div class="descricao-lobo">
                    <p class="texto-lobo">${description}</p>
                    <p class="texto-lobo">${description}</p>
            </div>
        </div>`
    show_lobinho.appendChild(nova_li)
}

fetch(url)
.then(resp => resp.json())
.then(wolves => {
    for (let i = 0; i <= wolves.wolves.length; i++) {
        transformaDiv(wolves.wolves[i].name, wolves.wolves[i].link_image, wolves.wolves[i].description, wolves.wolves[i].id)}
    })