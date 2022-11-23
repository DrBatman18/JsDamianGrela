//Declaracion de Variables

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
let botonFinalizar = document.getElementById("finalizar")
const fragment = document.createDocumentFragment()
let carrito = {}

// Eventos

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        escribirCarrito()
    }
})
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

// Traer productos
const fetchData = async () => {
    const res = await fetch('../js/bd.json');
    const data = await res.json()
    // console.log(data)
    rellenarCards(data)
}

// Rellenar productos
const rellenarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.nombre
        templateCard.querySelector('.descripcion').textContent = item.descripcion
        templateCard.querySelector('.precio').textContent = item.precio
        templateCard.querySelector('img').setAttribute("src", item.img)
        templateCard.querySelector('button').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

// Agregar al carrito

const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
        Toastify({
            text: "Producto agregado al carrito",
            position: "center",
            duration: 3000
        }).showToast();
    }
    e.stopPropagation()

}

const setCarrito = item => {
     const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('.precio').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1        
    }

    carrito[producto.id] = { ...producto }
    
    escribirCarrito()
}

const escribirCarrito = () => {
    items.innerHTML = ''
    
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    escribirFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const escribirFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales

    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        escribirCarrito()
    })

}

const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        escribirCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        escribirCarrito()
    }
    e.stopPropagation()
}

botonFinalizar.onclick = () => {
    if(Object.keys(carrito).length === 0){
        Toastify({
            text: "Su carro esta vacio, agregre un producto",
            position: "center",
            duration: 3000          
        }).showToast();
    }else{
        carrito = {};
        document.getElementById("items").innerHTML="";
        let infoTotal = document.getElementById("total");           
        Toastify({
            text: "Pronto recibirá un mail de confirmacion",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }                        
        }).showToast();
        
        localStorage.removeItem("carrito")              
                        
    }
}