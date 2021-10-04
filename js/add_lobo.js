let botao = document.querySelector("#botao_enviar")
botao.addEventListener("click", (e) => {
    e.preventDefault()
    let name = document.querySelector("#name").value
    console.log(name)
    let age = document.querySelector("#age").value
    console.log(age)
    let link_image = document.querySelector("#link_image").value
    console.log(link_image)
    let description = document.querySelector("#description").value
    console.log(description)
    if (name != "" && age != "" && link_image != "" && description != ""){
        let fetchBody = {
            "wolf":{
                "name": name,
                "age": parseInt(age),
                "link_image": link_image,
                "description": description
            }
        }
        let fetchConfig = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(fetchBody)
        }
        fetch("https://lobinhos.herokuapp.com/wolves", fetchConfig)
        .then(resp => resp.json())
        .then(element => transformaDiv(element.name, element.age, element.link_image, element.description, "myForm"))
        .catch(error => console.warn(error))
    }
    window.open("listaDeLobos.html")
})
