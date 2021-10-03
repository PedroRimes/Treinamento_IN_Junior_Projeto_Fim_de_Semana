const $ = document
let list = $.querySelector('#entrada-dados');
let submit = $.querySelector('#botao');
const url = "http://lobinhos.herokuapp.com/wolves"

// GET /////////////////////////////////////

fetch(url).then(resp => resp.json())

// APARECE O LOBO /////////
const apareceLobo = (id,name,age,link_image,description) =>{
    let new_child = $.createElement("div")
    new_child = "div-group-" + id
    new_child.innerHTML= `
    <div class="imagens-sobrepostas">
        <figure class="quadrado-azul"></figure>
        <img class="imagem-lobo" src="${link_image}" alt="">
    </div>
    <div class="descricao-lobo">
        <div>
            <p class="nome-lobo">${name}</p>
            <button type="submit" class="caixaadotar">Adotar</button>
        </div>
        <div>
            <h3 class="idade-lobo">Idade: ${age} anos</h3>
            <p class="texto-lobo">${description}</p>
        </div>
    </div>`
    new_child.classList.add("div_group")
    list.appendChild(new_child)
}

// Adicionar Novo Lobo //////////////////////////////////////////////////////////

submit.addEventListener('click', () =>{
    var name = $.querySelector("#name").value;
    console.log(name)
    var age = $.querySelector("#age").value;
    var link_image = $.querySelector("#link_image").value;
    var description = $.querySelector("#description").value;
    if (name != "" && age != "" && image != "" && description != ""){
        let fetchBody = {
            wolf: {
                "name": name,
                "age": age,
                "link_image": link_image,
                "description": description
            }
        }
        let fetchConfig = {
            method = "POST",
            headers = {"Content-Type": "application/json"},
            body: JSON.stringify(fetchBody)
        }
        fetch(url,fetchConfig)
        .then(resp => resp.json())
        .then(element => apareceLobo(element.id, element.name, element.age, element.link_image, element.description))
        .catch(error => console.warn(error))

    }
})
////////////////////////////////////////////////////////////////////