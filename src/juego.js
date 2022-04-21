
class Juego{
    constructor(numEnemigos=5){
        this.numEnemigos = numEnemigos
        this.arrayEnemigos = []
        this.nave = new Nave(300,300,10,10)
        this.nave.setInit()
        this.vidas = 3
    }
    //Funciobn para mover cosas
    mover(){
        //control colisiones
        var caso1 = false;
        var caso2 = false
        const frames = setInterval(()=>{   
            this.nave.setMover()
            this.arrayEnemigos.forEach(roca => {
                roca.setMover()
                //Comprobamos posible colisión con todas las rocas
                caso1 = this.nave.x + this.nave.ancho > roca.x && this.nave.x < roca.x && this.nave.y + this.nave.alto > roca.y && this.nave.y < roca.y; 

                caso2 = this.nave.x < roca.x +  roca.ancho && this.nave.x + this.nave.ancho > roca.x && this.nave.y < roca.y + roca.alto && this.nave.y + this.nave.alto > roca.y;

                if((caso1 || caso2) && this.nave.estado == 'vivo'){
                    this.vidas--
                    document.querySelector('.numVidas').innerHTML = this.vidas;
                    console.log(this.vidas);
                    this.nave.muerto()
                }
            });            
        }, 50)
    }
    setEnemigos(){
        for(let i=0;i<this.numEnemigos;i++){
            this.arrayEnemigos.push(new Enemigo())
            this.arrayEnemigos[i].setInit()
        }
    }
    colision(roca){ 
          
    }
    play(){
        this.setEnemigos()
        this.mover()
    }
}


