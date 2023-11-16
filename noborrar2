let imgjava = document.getElementsByClassName("imgjava")
console.log(imgjava)

let numeroDeImagen = 0;

function cambiarfondo(){
    
}
function cambiarfondo2(){
    this.style.filter = "blur(0px)"
}

function ponerId(i){
    codigo='00';
    codigoFinal=codigo+i;
    console.log('Identificador: ' + codigoFinal);
    console.log(i);
    let content = document.getElementById(i);
    console.log(content);
    content.innerHTML = 'sdkfkdg';
}


for(let i=0;i<=imgjava.length-1;i++){
    imgjava[i].addEventListener("mouseleave", cambiarfondo2);
}

for(let i=0;i<=imgjava.length-1;i++){
    numeroDeImagen = i;
    imgjava[i].addEventListener("mouseover", function (e) {
        this.style.filter = "blur(10px)";
        // ponerId(numeroDeImagen); // numeroDeImagen (variable global) toma el valor de i para no usar parentesis en cambiarfondo
        let imagenActual = this;
        console.log(imagenActual.attr('id'));

        // while (articleNode.nodeName != "ARTICLE" && articleNode.nodeName != "BODY") {
        //   articleNode = articleNode.parentNode;
        // }
        // if (articleNode.nodeName == "BODY") {
        //   // no article ancestor was found
        // } else {
        //   // do something with articleNode
        //   console.log(articleNode.id);
        // }

        e.stopPropagation();
      });
}
