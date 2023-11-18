let Foto = document.getElementsByClassName("foto")

console.log("funcionaaa")

function cambiarfondo(){
    this.style.transform = "scale(1.1)"; 
    this.style.transition = "transform 0.3s ease";
}
function cambiarfondo2(){
    this.style.transform = "scale(1)"}


for(let i=0;i<=Foto.length-1;i++){
    numeroDeImagen = i;
    Foto[i].addEventListener("mouseover",cambiarfondo)}

for(let i=0;i<=Foto.length-1;i++){
        Foto[i].addEventListener("mouseleave", cambiarfondo2);}
    
    

for (let i = 0; i < fotos.length; i++) {
        fotos[i].addEventListener("mouseover", cambiarFondo);
        fotos[i].addEventListener("mouseleave", cambiarFondo2);    }

