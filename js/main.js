//Funcion Bienvenida a la pagina
function bienvenido (){
    alert("Bienvenido a Fack");
}    

bienvenido()

let nombreApellido=prompt("ingresa tu nombre y apellido");

//Precio Final de la compra
precioTotal=0;

//Array de Productos
const platos = [{id: 1, nombre:"Bocadito de Salmon", tipo: "ENTRADAS", precio: 450},  
                {id: 2, nombre: "Croquetas de Pescado", tipo: "ENTRADAS", precio: 450},
                {id: 3, nombre: "Croquetas de Cangrejo", tipo: "ENTRADAS", precio: 450},
                {id: 4, nombre: "Ebi Fuji", tipo: "ENTRADAS", precio: 450},
                {id: 5, nombre: "Fiesta de Langostinos", tipo: "ENTRADAS", precio: 450},
                {id: 6, nombre: "Wakame", tipo: "ENTRADAS",precio: 450},
                {id: 7, nombre: "Neptuno Salad", tipo: "ENSALADAS",precio: 300},
                {id: 8, nombre: "Poke Chicken Dragon", tipo: "POKE BOWLS",precio: 300},
                {id: 9, nombre: "Poke Hawai", tipo: "POKE BOWLS",precio: 300},
                {id: 10, nombre: "Poke Spicy Crab", tipo: "POKE BOWLS",precio: 300},
                {id: 11, nombre: "Alaska Roll", tipo: "SUSHI ROLLS",precio: 600},
                {id: 12, nombre: "Avocado Roll", tipo: "SUSHI ROLLS",precio: 600},
                {id: 13, nombre: "California Roll", tipo: "SUSHI ROLLS",precio: 600},
                {id: 14, nombre: "Dinamita Roll", tipo: "SUSHI ROLLS",precio: 600},
                {id: 15, nombre: "Sensei Roll", tipo: "SUSHI ROLLS",precio: 600},
                {id: 16, nombre: "Tentacion Roll", tipo: "SUSHI ROLLS",precio: 600},
                {id: 17, nombre: "Tatanui Roll", tipo: "HOT ROLLS",precio: 600},
                {id: 18, nombre: "Tiger Roll", tipo: "HOT ROLLS",precio: 600},
                {id: 19, nombre: "Tiger Roll Special", tipo: "HOT ROLLS",precio: 600},
                {id: 20, nombre: "Tokio Roll", tipo: "HOT ROLLS",precio: 600},
                {id: 21, nombre: "Chicken wok", tipo: "HOLLY WOKS",precio: 750},
                {id: 22, nombre: "Surf and Turf", tipo: "HOLLY WOKS",precio: 750},
                {id: 23, nombre: "Yakisoba", tipo: "HOLLY WOKS",precio: 750}
];


let opcion = prompt("Ingrese el numero de acuerdo a la carta y le mostraremos sus menues: \n 1)Entradas \n 2)Ensaladas \n 3)Poke Bowls \n 4) Sushi Rolls \n 5) Hot Rolls \n 6) Holly Woks \nluego digite FIN en mayuscula para continuar y hacer su pedido".toUpperCase());
while(opcion !="FIN"){
    switch(opcion){
        case "1":
            let busqueda=platos.filter( (pl) => {
                if (pl.tipo=="ENTRADAS".toUpperCase()){ 
                console.log("     ENTRADAS\n"+pl.nombre+" - Precio $ "+pl.precio);    
                }
            });
        break;
        case "2":
            let busqueda2=platos.filter( (pl) => {
                if (pl.tipo=="ENSALADAS".toUpperCase()){ 
                console.log("     ENSALADAS\n"+pl.nombre+" - Precio $ "+pl.precio);    
                }
            }); 
        break;
        case "3":
            let busqueda3=platos.filter( (pl) => {
                if (pl.tipo=="POKE BOWLS".toUpperCase()){ 
                console.log("     POKE BOWLS\n"+pl.nombre+" - Precio $ "+pl.precio);    
                }
            }); 
        break;
        case "4":
            let busqueda4=platos.filter( (pl) => {
                if (pl.tipo=="SUSHI ROLLS".toUpperCase()){ 
                console.log("     SUSHI ROLLS\n"+pl.nombre+" - Precio $ "+pl.precio);    
                }
            }); 
        break;
        case "5":
            let busqueda5=platos.filter( (pl) => {
                if (pl.tipo=="HOT ROLLS".toUpperCase()){ 
                console.log("     HOT ROLLS\n"+pl.nombre+" - Precio $ "+pl.precio);    
                }
            });    
        break;
        case "6":
            let busqueda6=platos.filter( (pl) => {
                if (pl.tipo=="HOLLY WOKS".toUpperCase()){ 
                console.log("     HOLLY WOKS\n"+pl.nombre+" - Precio $ "+pl.precio);    
                }
            });           
        break;
            default:
                console.log("Digito un numero que no esta en la carta" .toUpperCase());
                break;        
    }    
    opcion=prompt("Ingrese el numero de acuerdo a la carta y le mostraremos sus menues,\n \n1 Entradas \n2 Ensalada \n3 Poke Bowls \n4 Sushi Rolls \n5 Hot Rolls \n6 Holly woks \n Luego digite FIN en mayuscula para continuar y hacer su pedido".toUpperCase());
}

let hacerPedido = prompt("Ingrese su pedido en mayuscula o FIN de la misma manera terminar)");
let buscador = platos.find(plato => plato.nombre.toUpperCase() === hacerPedido.toUpperCase());

while(hacerPedido!=="FIN"){
if(buscador){
    precioTotal+=buscador.precio;
   console.log(hacerPedido);
}else{
    console.log("Ese producto no esta en la carta");
    }
    hacerPedido = prompt("Ingrese su pedido (FIN para terminar)");
}

console.log("PEDIDO A NOMBRE DE:\n"+(nombreApellido)+"\nTOTAL A PAGAR \n"+(precioTotal));

