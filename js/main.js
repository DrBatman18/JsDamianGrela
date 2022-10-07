function bienvenido (){
    alert("Bienvenido a Fack");
}    

bienvenido()

let nombreApellido=prompt("ingresa tu nombre y apellido");
let precioTotal =0;

let carta=prompt("Ingrese el numero de acuerdo a la carta y le mostraremos sus menues,\n \n1 Entradas \n2 Ensalada \n3 Poke Bowls \n4 Sushi Rolls \n5 Hot Rolls \n6 Holly woks \n \nLuego digite FIN en mayuscula para continuar y hacer su pedido");
while(carta !="FIN"){
    switch(carta){
        case "1":
        console.log("   ENTRADAS \nBocadito de Salmon $450 \nCroquetas de Pescado $450 \nCroquetas de Cangrejo $450 \nEbi Fuji $450 \nFiesta de Langostinos $450 \nWakame $450".toUpperCase());
        break;
        case "2":
        console.log("   ENSALADAS \nNeptuno Salad $300".toUpperCase());
        break;
        case "3":
        console.log("   POKE BOWLS \nPoke Chicken Dragon $500 \nPoke Hawai $500 \nPoke Spicy Crab".toUpperCase());
        break;
        case "4":
        console.log("   SUSHI ROLLS \nAlaska Roll $600 \nAvocado Roll $600 \nCalifornia Roll $600 \nDinamita Roll $600 \nSensei Roll $600 \nTentacion Roll $600".toUpperCase());
        break;
        case "5":
        console.log("   HOT ROLLS \nTatanui Roll $650 \nTiger Roll $650 \nTiger Roll Special $650 \nTokio Roll $650".toUpperCase());
        break;
        case "6":
        console.log("   HOLLY WOKS \nChicken wok $750 \nSurf and Turf $750 \nYakisoba $750".toUpperCase());
        break;
            default:
                console.log("Digito un numero que no esta en la carta" .toUpperCase());
                break;        
    }    
    carta=prompt("Ingrese el numero de acuerdo a la carta y le mostraremos sus menues,\n \n1 Entradas \n2 Ensalada \n3 Poke Bowls \n4 Sushi Rolls \n5 Hot Rolls \n6 Holly woks \n Luego digite FIN en mayuscula para continuar y hacer su pedido");
}

let hacerPedido = prompt("Ingrese su pedido en mayuscula o FIN de la misma manera terminar)");

while (hacerPedido !== "FIN"){
if (hacerPedido=="BOCADITO DE SALMON" || hacerPedido=="CROQUETAS DE PESCADO" || hacerPedido=="CROQUETAS DE CANGREJO" || hacerPedido== "EBI FUJI" || hacerPedido=="FIESTA DE LANGOSTINOS" || hacerPedido=="WAKAME") {
    precioTotal +=450;
    console.log(hacerPedido);
} else if(hacerPedido=="NEPTUNO SALAD"){
    precioTotal += 300;
    console.log(hacerPedido);
}else if (hacerPedido=="POKE CHICKEN DRAGON" || hacerPedido=="POKE HAWAI" || hacerPedido=="POKE SPICY CRAB"){
    precioTotal +=500;
    console.log(hacerPedido);
}else if (hacerPedido=="ALASKA ROLL" || hacerPedido=="AVOCADO ROLL" || hacerPedido=="CALIFORNIA ROLL" || hacerPedido=="DINAMITA ROLL" || hacerPedido=="SENSEI ROLL" || hacerPedido=="TENTACION ROLL"){
    precioTotal +=600;
    console.log(hacerPedido);
}else if(hacerPedido=="TATANUI ROLL" || hacerPedido=="TIGER ROLL" ||hacerPedido=="TIGER ROLL SPECIAL" || hacerPedido=="TOKIO ROLL"){
    precioTotal +=650;
    console.log(hacerPedido);
}else if
(hacerPedido=="CHICKEN WOK" || hacerPedido=="SURF AND TURF" || hacerPedido=="YAKISOBA"){
    precioTotal +=750;
    console.log(hacerPedido);

}else {
    console.log("Ese producto no esta en la carta");
    }
    hacerPedido = prompt("Ingrese su pedido (FIN para terminar)");     
}

console.log("PEDIDO A NOMBRE DE:\n"+nombreApellido+"\nTOTAL A PAGAR \n"+precioTotal);
