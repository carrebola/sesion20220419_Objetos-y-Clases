//********** Crar una clase *************** */


//clase enemigo a partir de la clase Elemento
class Enemigo extends Elemento{
    constructor(x=0, y=0, velX=1, velY=1){
        super(x,y) //representa a elemento
        this.velX = velX
        this.velY = velY
        this.setPosicionAleatoria()
        this.setVelocidadAleatoria()
    }
    setMover(){
        if(this.x>window.innerWidth) this.x = 0
        if(this.x<0) this.x = this.x + window.innerWidth
        if(this.y>window.innerHeight) this.y = 0
        if(this.y<0) this.y = this.y + window.innerHeight

        this.x = this.x + this.velX
        this.y = this.y + this.velY
        this.setPosicion()
    }
    setPosicionAleatoria(){
        const anchoPantalla = window.innerWidth;
        const altoPantalla = window.innerHeight;
        this.x = Math.ceil(Math.random()* anchoPantalla)
        this.y = Math.ceil(Math.random()* altoPantalla)
    }
    setVelocidadAleatoria(){
        this.velX = Math.floor(Math.random()* 20) - 10
        this.velY = Math.floor(Math.random()* 20) - 10
    }
    setInit(){
        super.setInit()
        this.setImagen('enemigo')
    }
    
}

