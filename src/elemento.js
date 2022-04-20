

class Elemento{
    constructor(x=0, y=0){
        //propiedades
        this.x = x 
        this.y = y 
        this.UI = '' //representación el el dom  
        this.ancho = 100
        this.alto = 100  
    }
    //métodos
    setUI(){
        //node es el elemento que quiero clonar
        const node = document.querySelector('#plantilla_elemento');
        //clonamos el div node y lo metemos en la propiedad UI
        this.UI = node.cloneNode(true);
        //Lo añadimos al escenario
        document.querySelector('#escenario').appendChild(this.UI);
    }
    setColor(color='brow'){
        this.UI.style.backgroundColor = color
    }
    setImagen(imagen=''){
        this.UI.classList.add(imagen)
    }
    setPosicion(){
        this.UI.style.top = `${this.y}px`;
        this.UI.style.left = this.x + 'px';
        this.UI.style.backgroundImage
    }
    setVisible(estado=true){
        if(estado){
            this.UI.style.display="block"
        }else{
            this.UI.style.display="none"
        }
    }
    setInit(){
        this.setUI()
        this.setPosicion()
        this.setVisible()
        this.setMover()
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
}