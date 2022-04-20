

class Elemento{
    constructor(x=0, y=0, ancho=100, alto=100){
        //propiedades
        this.x = x 
        this.y = y 
        this.UI = '' //representación el el dom  
        this.ancho = ancho
        this.alto = alto  
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
}