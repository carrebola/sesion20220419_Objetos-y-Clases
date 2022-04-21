// Importamos las librerias (clases) que necesitamos
import {Enemigo} from './enemigo.js'
import {Nave} from './nave.js'

// Exportamos la clase Juego
export class Juego{
    
    constructor(numEnemigos=5){
        this.contadorEnemigos = 0
        this.numEnemigos = numEnemigos
        this.arrayEnemigos = [] // Aquí guardaremos los objetos enemigo
        this.nave = '' //Aqui guardaremos el objeto de la nave
        this.vidas = 3 // vidas
        this.frames = '' //Set interval para la animación del juego
        this.insertarRocas = '' //set interval para lanzar las rocas
        this.tiempo = 0 // Tiempo de la partida
        this.temporizador = '' //SetInterval del tiempo de la partida
        
    }
    //Comineza la partida
    play(){
        //Creamos temporizador para tiempo de la partida
        this.temporizador = setInterval(()=>{
            this.tiempo++
            document.querySelector('.tiempo').innerHTML = this.tiempo;
        } , 1000) // cada 1000 milisegundos

        //Creamos una instancia de la clase Nave y la guardamos en this.nave
        this.nave = new Nave(300,300,10,10)
        //Inicializamos el objeto nave
        this.nave.setInit()
        //Creamos los enenmigos
        this.setEnemigos()
        //Hacemos que aparezca la 'nave con escudo'
        this.nave.apareciendo()
        //Llamamos a mover para comenzar a mover los objetos
        this.mover()
    }
    //Creamos un array con enemigos
    setEnemigos(){
        //Añado el primer objeto de la clase Enemigo al arrayEnemigos
        this.arrayEnemigos.push(new Enemigo())
        //Accedo a este primer objeto y llamo a su metodo de inicialización
        this.arrayEnemigos[0].setInit()

        //función que añade rocas al array y las inicializa
        const addEnemigo = ()=>{ 
            if(this.contadorEnemigos < this.numEnemigos){
                //añadimos nuevo objeto
                this.arrayEnemigos.push(new Enemigo())
                //accedo a ese objeto y lo inicializo con setInit
                this.arrayEnemigos[this.arrayEnemigos.length-1].setInit()
                this.contadorEnemigos++
            }
        }
       
        //Cada 1 segundo inserto una nueva roca (enemigo)
        this.insertarRocas = setInterval(addEnemigo,1000) //cada segundo
    }

    //Funcion para mover cosas
    mover(){
        //control colisiones
        var caso1 = false
        var caso2 = false
        //Temporizar para la animación
        this.frames = setInterval(()=>{   
            
            this.nave.setMover()
            //recorro el array de las rocas y, una por una, miro si hay colision
            this.arrayEnemigos.forEach(roca => {
                roca.setMover()
                //Comprobamos posible colisión con todas las rocas
                caso1 = this.nave.x + this.nave.ancho > roca.x && this.nave.x < roca.x && this.nave.y + this.nave.alto > roca.y && this.nave.y < roca.y 

                caso2 = this.nave.x < roca.x +  roca.ancho && this.nave.x + this.nave.ancho > roca.x && this.nave.y < roca.y + roca.alto && this.nave.y + this.nave.alto > roca.y;

                if((caso1 || caso2) && this.nave.estado == 'vivo'){
                    this.vidas--
                    if(this.vidas == 0) this.fin()
                    document.querySelector('.numVidas').innerHTML = this.vidas;
                    this.nave.muerto()
                }
            });            
        }, 50) // Cada 50 milisegundos
    }
    //Cuando las vidas llegan a 0
    fin(){
        clearInterval(this.frames)
        clearInterval(this.insertarRocas)
        clearInterval(this.temporizador)

        document.querySelector('#p').innerHTML = 'Game Over'
        const mensaje = document.querySelector('.mensaje')
        document.querySelector('#escenario').innerHTML = '';
        mensaje.style.display = 'block'
    }    
}


