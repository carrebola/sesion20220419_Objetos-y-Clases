
import {Juego} from './src/juego.js'

document.querySelector('.btn-comenzar').addEventListener('click', ()=>{
    document.querySelector('.mensaje').style.display = 'none';
    
    //creamos instancia de la clase Juego pasandole 10 (numero de rocas)
    const juego = new Juego(3)
    //llamamos al método play del objeto
    juego.play()
    
});






