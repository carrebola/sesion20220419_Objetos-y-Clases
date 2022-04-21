
document.querySelector('.btn-comenzar').addEventListener('click', ()=>{
    
    document.querySelector('.mensaje').style.display = 'none';
    const juego = new Juego(10)
    juego.play()
    
});






