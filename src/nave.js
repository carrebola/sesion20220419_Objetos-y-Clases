class Nave extends Elemento{
    constructor(x=300, y=300, ancho=100, alto=150, velX=10, velY=10){
        super(x,y, ancho, alto);
        this.velX = velX;
        this.velY = velY;
    }
    setMover(){
        document.addEventListener('keydown', (key)=>{
            //console.log(key.code);
            if(key.code == 'ArrowUp') this.y = this.y - this.velY;
            if(key.code == 'ArrowDown') this.y = this.y + this.velY;
            if(key.code == 'ArrowLeft') this.x = this.x - this.velX;
            if(key.code == 'ArrowRight') this.x = this.x + this.velX;
            this.setPosicion()
        });
       
    }
    setInit(){
        super.setInit()
        this.setImagen('nave')
    }
}

