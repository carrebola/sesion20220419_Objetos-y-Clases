class Nave extends Elemento{
    constructor(x=300, y=300, velX=5, velY=5){
        super(x,y);
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

