
class Juego{
    constructor(numEnemigos=5){
        this.numEnemigos = numEnemigos
        this.arrayEnemigos = []
        this.nave = ''
        this.vidas = 3
        this.frames = ''
        this.insertarRocas = ''
        this.tiempo = 0
        this.temporizador = ''
    }
    //Funciobn para mover cosas
    mover(){
        //control colisiones
        var caso1 = false;
        var caso2 = false
        this.frames = setInterval(()=>{   
            this.nave.setMover()
            this.arrayEnemigos.forEach(roca => {
                roca.setMover()
                //Comprobamos posible colisión con todas las rocas
                caso1 = this.nave.x + this.nave.ancho > roca.x && this.nave.x < roca.x && this.nave.y + this.nave.alto > roca.y && this.nave.y < roca.y; 

                caso2 = this.nave.x < roca.x +  roca.ancho && this.nave.x + this.nave.ancho > roca.x && this.nave.y < roca.y + roca.alto && this.nave.y + this.nave.alto > roca.y;

                if((caso1 || caso2) && this.nave.estado == 'vivo'){
                    this.vidas--
                    if(this.vidas == 0) this.fin()
                    document.querySelector('.numVidas').innerHTML = this.vidas;
                    this.nave.muerto()
                }
            });            
        }, 50)
    }
    fin(){
        clearInterval(this.frames)
        clearInterval(this.insertarRocas)
        clearInterval(this.temporizador)
        
        document.querySelector('#p').innerHTML = 'Game Over'
        const mensaje = document.querySelector('.mensaje')
        document.querySelector('#escenario').innerHTML = '';
        mensaje.style.display = 'block'
    }
    setEnemigos(){
        this.arrayEnemigos.push(new Enemigo())
        this.arrayEnemigos[0].setInit()
        const addEnemigo = ()=>{
            this.arrayEnemigos.push(new Enemigo())
            this.arrayEnemigos[this.arrayEnemigos.length-1].setInit()
        }
        this.insertarRocas = setInterval(addEnemigo,1000)
    }
    play(){
        this.temporizador = setInterval(()=>{
            this.tiempo++
            document.querySelector('.tiempo').innerHTML = this.tiempo;
        } , 1000)
        //document.querySelector('.escenario').innerHTML = '';
        this.nave = new Nave(300,300,10,10)
        this.nave.setInit()
        this.setEnemigos()
        this.nave.apareciendo()
        this.mover()
    }
    
}


