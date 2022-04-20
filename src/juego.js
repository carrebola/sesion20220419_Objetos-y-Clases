
class Juego{
    constructor(numEnemigos=5){
        this.numEnemigos = numEnemigos
        this.arrayEnemigos = []
        this.nave = new Nave(300,300,100,150)
        this.nave.setInit()
    }
    //Funciobn para mover cosas
    mover(){
        const frames = setInterval(()=>{   
            this.arrayEnemigos.forEach(element => {
                element.setMover()
                this.colision()
            });
        }, 100)
    }
    setEnemigos(){
        for(let i=0;i<this.numEnemigos;i++){
            this.arrayEnemigos.push(new Enemigo())
            this.arrayEnemigos[i].setInit()
        }
    }
    colision(){
        
        
        this.arrayEnemigos.forEach((enemigo)=>{
            
            const caso1 = this.nave.x + this.nave.ancho > enemigo.x && this.nave.x < enemigo.x && this.nave.y + this.nave.alto > enemigo.y && this.nave.y < enemigo.y 

            const caso2 = this.nave.x < enemigo.x +  enemigo.ancho && this.nave.x + this.nave.ancho > enemigo.x && this.nave.y < enemigo.y + enemigo.alto && this.nave.y + this.nave.alto > enemigo.y

            

        console.log(caso1);
            if(caso1 || caso2){
                console.log('colision');
                this.nave.UI.classList.add('colision')
            }
            else{
                console.log('tranqui');
                this.nave.UI.classList.remove('colision')

            }
        })
    }
    play(){
        this.setEnemigos()
        this.mover()
    }
}


