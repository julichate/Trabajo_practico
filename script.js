

let clinica= 0
let oftalmologia = 0
let cardiologia = 0
let gastroenterología = 0
let seleccion = 0
let lopez = 0  
let garcia = 0  
let fernandez = 0 
let muraca = 0
let fisicaro = 0
let fortuna = 0
let romero = 0
let quiles = 0 
let astbury = 0 
let rosetti = 0
let chehem = 0
let valfosca = 0


function turnoDrClinica(){
    
    
    let docClinica = prompt("Seleccione su doctor: 1 - Dr. Lopez; 2 - Dr. García; 3 - Dr. Fernandez ")
   if (docClinica == 1) {
    lopez++
    alert("su turno es: Dr. Lopez " + lopez)
   }
    
   
   else if (docClinica == 2){
   garcia++
   alert("su turno es Dr. García :" + garcia)

   }

   else if (docClinica == 3){
    fernandez++ 
    alert("su turno es DR. Fernandez :" + fernandez)

}
}
 

function turnoDrOftalmologia(){
    let docOftalmologia = prompt("Seleccione su doctor: 1 - Dr. Muraca; 2 - Dr. Fisicaro; 3 - Dr. Fortuna")
    if (docOftalmologia == 1) {
        muraca++
        alert("su turno es: Dr. Muraca " + muraca)
        
    }
    else if (docOftalmologia == 2) {
        fisicaro++
        alert("su turno es Dr. Fisicaro " + fisicaro)
        }
    else if (docOftalmologia == 3) {
        fortuna++
        alert("su turno es DR. Fortuna " + fortuna)
    }    
}


function turnoDrCardiologia() {
    let docCardiologia = prompt("Seleccione su doctor: 1 - Dr. Romero; 2 - Dr. Quiles; 3 - Dr. Astbury")
    if (docCardiologia == 1) {
        romero++
    alert("su turno es: Dr. Romero " + romero)
}
else if (docCardiologia == 2){
    quiles++
    alert("su turno es: Dr. Quiles " + quiles)
}
else if (seleccion == 3) {
    astbury++
    alert("su turno es: Dr. Astbury " + astbury)
}
}


function turnoDrGastroenterologia() {
    let docGastroenterologia = prompt("Seleccione su doctor: 1 - Dr. Rosetti; 2 - Dr. Chehem; 3 Dr. Valfosca")
    if (docGastroenterologia == 1) {
        rosetti++
        alert("su turno es: Dr. Rosetti " + rosetti )
        }
    else if (docGastroenterologia == 2){
        chehem++
        alert("su turno es: Dr. Chehem " + chehem)
    }    
    else if (docGastroenterologia == 3){
        valfosca++
        alert("su turno es: Dr. Valfosca " + valfosca)
    }
}

alert("comenzar")


do {
    
    seleccion=prompt("solicitud de turnos: 1-clínica; 2-oftalmología; 3-cardiología; 4-gastroenterología; 5- Salir ")
if (seleccion== 1) {
    turnoDrClinica()     
        }

    else if (seleccion == 2) {
        turnoDrOftalmologia() 
        }
        else if (seleccion == 3) {
           turnoDrCardiologia()
        }
        else if (seleccion == 4) { 
            turnoDrGastroenterologia()
        }    
     else if (seleccion == 5) {
        alert("Muchas Gracias")}

       else if (seleccion >5 ) {
        alert("ingresó una opción inválida")
       }
} while (seleccion != 5);
  


