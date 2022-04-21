// Importampos lo que necesitamos
import {Elemento} from './elemento.js'

//Exportamos la clase enemigo creada a partir de la clase Elemento
export class Enemigo extends Elemento{
    constructor(x=0, y=0, velX=1, velY=1){
        super(x,y) //representa a elemento
        this.velX = velX
        this.velY = velY
        this.setPosicionAleatoria()
        this.setVelocidadAleatoria()
    }
    setMover(){
        //Para que el objeto al salir de la pantalla aparezca por el otro lado
        if(this.x>window.innerWidth) this.x = 0
        if(this.x<0) this.x = this.x + window.innerWidth
        if(this.y>window.innerHeight) this.y = 0
        if(this.y<0) this.y = this.y + window.innerHeight

        //Incrementar la posición del objeto
        this.x = this.x + this.velX
        this.y = this.y + this.velY
        //Actualizar en pantalla el div que representa al objeto
        this.setPosicion()
    }
    
    setInit(){
        //redefinimos el método setInit()
        super.setInit()
        //añadimos funcionalidad a este método
        this.setImagen('enemigo')
    }
    
}

