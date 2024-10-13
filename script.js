let correctas=[1,2,2,1,2];

let opcion_elegida=[];

let cantidad_aciertos=0;

function respuesta(num_pregunta, seleccionada){
    opcion_elegida[num_pregunta]=seleccionada.value;

    id="p"+num_pregunta;

    labels=document.getElementById(id).childNodes;
}

function terminar(){
    cantidad_aciertos=0;
    for(i=0; i<correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_aciertos++;
        }
    }
    if(document.getElementById("resultado").innerHTML=cantidad_aciertos==5){
        document.getElementById("terminar").innerHTML="Excelente";
        document.getElementById("resultado").innerHTML=cantidad_aciertos;
    }else if(document.getElementById("resultado").innerHTML=cantidad_aciertos==4){
        document.getElementById("terminar").innerHTML="Muy Buena";
        document.getElementById("resultado").innerHTML=cantidad_aciertos;
    }else if(document.getElementById("resultado").innerHTML=cantidad_aciertos==3){
        document.getElementById("terminar").innerHTML="Buena";
        document.getElementById("resultado").innerHTML=cantidad_aciertos;
    }else if(document.getElementById("resultado").innerHTML=cantidad_aciertos==2){
        document.getElementById("terminar").innerHTML="Regular";
        document.getElementById("resultado").innerHTML=cantidad_aciertos;
    }else if(document.getElementById("resultado").innerHTML=cantidad_aciertos==1){
        document.getElementById("terminar").innerHTML="Mala";
        document.getElementById("resultado").innerHTML=cantidad_aciertos;
    }else if(document.getElementById("resultado").innerHTML=cantidad_aciertos==0){
        document.getElementById("terminar").innerHTML="N/A  ";
        document.getElementById("resultado").innerHTML=cantidad_aciertos;
    }

}

function regresar(){
    window.location.replace("juegos.html");
}

function reintentar(){
    window.location.replace("quiz.html");
}