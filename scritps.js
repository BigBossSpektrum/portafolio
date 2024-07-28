// funcion de copiar texto
function copy() {
    var copyText = document.getElementById("btn__copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copiado: " + copyText.value);
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.tecnologias img');
    const containerWidth = document.querySelector('.tecnologias').offsetWidth;

    images.forEach((img, index) => {
        img.style.animationDelay = `${index * 2}s`;
    });
});
