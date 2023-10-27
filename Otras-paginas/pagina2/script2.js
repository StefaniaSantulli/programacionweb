let imgjava = document.getElementsByClassName("imgjava")
console.log(imgjava)

function cambiarfondo(){
    
this.style.filter = "blur(10px)"
}
function cambiarfondo2(){
    
    this.style.filter = "blur(0px)"
    }

imgjava[0].addEventListener("mouseover",cambiarfondo)
imgjava[0].addEventListener("mouseleave",cambiarfondo2)
 