class Nave extends Elemento{
    constructor(x=300, y=300, velX=5, velY=5){
        super(x,y);
        this.velX = velX;
        this.velY = velY;
        this.estado = 'vivo'
        this.move = {
            up: false,
            down: false,
            left: false,
            right: false
        }
    }
    muerto(){
        this.estado = 'muerto'
        this.UI.classList.add('colision')
        setTimeout(()=>{
            this.setPosicionAleatoria()
            this.setPosicion()
            this.apareciendo()
        },1000)
    }
    apareciendo(){
        this.estado = 'apareciendo'
        this.UI.classList.remove('colision')
        this.UI.classList.add('apareciendo')
        setTimeout(()=>{
            this.estado = 'vivo'
            this.UI.classList.remove('apareciendo')
        },1000)
    }
    setMover(){ 
        if(this.move.up) this.y = this.y - this.velY;
        if(this.move.down) this.y = this.y + this.velY;
        if(this.move.left) this.x = this.x - this.velX;
        if(this.move.right) this.x = this.x + this.velX;
        
        if(this.x>window.innerWidth) this.x = 0
        if(this.x<0) this.x = this.x + window.innerWidth
        if(this.y>window.innerHeight) this.y = 0
        if(this.y<0) this.y = this.y + window.innerHeight
        this.setPosicion()
    }
    setInit(){
        super.setInit()
        //añadimos listener a teclas
        document.addEventListener('keydown', (key)=>{
            //console.log(key.code);
            if(key.code == 'ArrowUp') this.move.up = true
            if(key.code == 'ArrowDown') this.move.down = true
            if(key.code == 'ArrowLeft') this.move.left = true
            if(key.code == 'ArrowRight') this.move.right = true
            this.UI.classList.add(key.code)
            
        });
        document.addEventListener('keyup', (key)=>{
            //console.log(key.code);
            if(key.code == 'ArrowUp') this.move.up = false
            if(key.code == 'ArrowDown') this.move.down = false
            if(key.code == 'ArrowLeft') this.move.left = false
            if(key.code == 'ArrowRight') this.move.right = false
            console.log(key.code);
            this.UI.classList.remove(key.code)
        });
        this.setImagen('nave')
    }
}

