function loadcupon(){
document.getElementById('cupon').style.display="block";
document.getElementById('carousel').style.opacity="0.5";
}

const closecupon = () => {
    document.getElementById('cupon').style.display="none";
    document.getElementById('carousel').style.opacity="1";
}