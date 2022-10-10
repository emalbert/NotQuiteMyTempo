/*
Nota: el uso de atributos data permite vincular elementos que comparten un vinculo lógico entre ambos.
En este caso, quiero que cada elemento letra esté vinculado lógicamente con un sonido determinado y a la aplicación de una clase al presionarlo

Teoría:
- Plantillas Literales: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
- Atributos Data en HTML: https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes#:~:text=Los%20atributos%20data%2D*%20permiten,en%20el%20DOM%20o%20Node.
*/

let evtPressDown = window.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Capturo el elemento audio con un data-key que corresponde al keyCode de la letra
    let letra = document.querySelector(`.letras[data-key="${e.keyCode}"]`); //Capturo una clase letras con un data-key que corresponde al keyCode de la letra
    if (!audio) {
        console.log("Whooops! Not quite my tempo!") //Si presiona una tecla distinta de las disponibles
    } else {
        letra.classList.add('letra-presionada');
        audio.currentTime = 0; //Fuerza el comienzo desde el principio del sonido
        audio.play();
    }
})

let evtPressUp = window.addEventListener('keyup', function(e){
    let letra = document.querySelector(`.letras[data-key="${e.keyCode}"]`);
    if(letra) {
        letra.classList.remove('letra-presionada');
    }
});