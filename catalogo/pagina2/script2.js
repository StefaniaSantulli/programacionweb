let imgjava = document.getElementsByClassName("imgjava")
console.log(imgjava)


function cambiarfondo(){
    this.style.filter = "blur(10px)";

}
function cambiarfondo2(){
    this.style.filter = "blur(0px)"
}

for(let i=0;i<=imgjava.length-1;i++){
    imgjava[i].addEventListener("mouseleave", cambiarfondo2);
}
for(let i=0;i<=imgjava.length-1;i++){
    numeroDeImagen = i;
    imgjava[i].addEventListener("mouseover",cambiarfondo)}
