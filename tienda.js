
const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const temprateCard = document.getElementById("template-card").content
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener("DOMContentLoaded", e =>{ 
    fetchData()
})

cards.addEventListener("click", e =>{
    agregarCarrito(e)
})

items.addEventListener("click", e => { 
    btnAumentarDisminuir(e) 
})

const fetchData = async () => {
    try {
        const res = await fetch("../js/bd.json");
        const data = await res.json();
        //console.log(data);
        rellenarCards(data)
    } catch (error) {
        console.log(error);
    }
}

const rellenarCards = data => {
    data.forEach(plato => {
        temprateCard.querySelector("h5").textContent = plato.nombre
        temprateCard.querySelector("img").setAttribute("src", plato.img)
        temprateCard.querySelector(".card-text").textContent = plato.descripcion
        temprateCard.querySelector(".precio").textContent = plato.precio
        temprateCard.querySelector(".btn-dark").dataset.id = plato.id

        const clone = temprateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    cards.appendChild(fragment);
}

const agregarCarrito = e => {
   // console.log(e.target);
    //console.log(e.target.classList.contains("btn-dark"));
    if(e.target.classList.contains("btn-dark")){
        mainCarrito(e.target.parentElement)  

    }
    e.stopPropagation()
}

const mainCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        nombre: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector(".precio").textContent,
        cantidad : 1
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto } 
    rellanarCarrito();
}

const rellanarCarrito = () =>{
    items.innerHTML = " "
    Object.values(carrito).forEach(producto => {
            templateCarrito.querySelector("th").textContent = producto.id
            //templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre
            //templateCarrito.querySelectorAll("td")[1].textContent = producto.precio
            templateCarrito.querySelector("span").textContent = producto.precio * producto.cantidad
            templateCarrito.querySelector(".btn-info").dataset.id = producto.id
            templateCarrito.querySelector(".btn-danger").dataset.id = producto.id

            const clone = templateCarrito.cloneNode(true)
            fragment.appendChild(clone)
        })
    items.appendChild(fragment)

    rellanarCarrito()
}




/*
const data = async () => {
    await fetch("bd.json").then((response) =>{
    return response.json();
}).then((bd) =>{
    console.log(bd);
})

}
    
data()

fetch('../js/bd.json')
.then(res=>res.json())
.then(data => console.log(data))

*/