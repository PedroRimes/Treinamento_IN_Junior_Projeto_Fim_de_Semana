// const wolves = [
//     {
//         name: "lobo branco",
// 	    age: 3,
// 	    link_image: "image (2).png",
// 	    description: "Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.",
//     },
//     {
//         name: "lobo montanha",
//         age: 5,
//         link_image: "lobo_montanha.jpg",
//         description: "Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas."
//     },
//     {
//         name: "lobo laranja",
//         age: 10,
//         link_image: "Lobo_laranja.jpg",
//         description: "Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas."
//     },
//     {
//         name: "lobo guará",
//         age: 9,
//         link_image: "LOBO_GUARÁ,jpg",
//         description: "Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas."
//     }, 
//     {
//         name: "lobo cinza",
//         age: 14,
//         link_image: "image (2).png",
//         description: "Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas."
//     },
// ]

// const $ = "document"
// let submit = $.querySelector('#entrada-dados');
const url = "http://lobinhos.herokuapp.com"

// APARECE O LOBO /////////
// const apareceLobo = (id,name,age,link_image,description) =>{
//     new_child.id = "div-group-" + id
//     new_child.classList.add("div_group")
//     new_child.innerHTML= `
//     <div class="imagens-sobrepostas">
//         <figure class="quadrado-azul"></figure>
//         <img class="imagem-lobo" src="${link_image}" alt="">
//     </div>
//     <div class="descricao-lobo">
//         <div>
//             <p class="nome-lobo">${name}</p>
//             <button type="submit" class="caixaadotar">Adotar</button>
//         </div>
//         <div>
//             <h3 class="idade-lobo">Idade: ${age} anos</h3>
//             <p class="texto-lobo">${description}</p>
//         </div>
//     </div>`
//     list.appendChild(new_child)
// }}

// GET /////////////////////////////////////

// const getWolves = (fetch(url).then(resp => resp.json()))

// Adicionar Novo Lobo //////////////////////////////////////////////////////////

// submit.addEventListener('click', () =>{
//     var name = $.querySelector("#name").value;
//     var age = $.querySelector("#age").value;
//     var link_image = $.querySelector("#link_image").value;
//     var description = $.querySelector("#description").value;
//     if (name != "" && age != "" && image != "" && description != ""){
//         let fetchBody = {
//             wolf: {
//                 "name": name,
//                 "age": age,
//                 "link_image": link_image,
//                 "description": description
//             }
//         }
//         let fetchConfig = {
//             method = "POST",
//             headers = {"Content-Type": "application/json"},
//             body: JSON.stringify(fetchBody)
//         }
//         fetch(url,fetchConfig)
//         .then(resp => resp.json())
//         .then(wolf => {
//             wolf.forEach(element => {
//                 apareceLobo(element => element)
//             });
//         })
//     }

// })
////////////////////////////////////////////////////////////////////

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));