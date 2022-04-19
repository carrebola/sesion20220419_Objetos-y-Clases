

class Elemento{
    constructor(x=0, y=0){
        //propiedades
        this.x = x 
        this.y = y 
        this.UI = '' //representación el el dom    
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
        //document.body.style.backgroundImage = "url('img_tree.png')";
    }
    setPosicion(){
        this.UI.style.top = `${this.y}px`;
        this.UI.style.left = this.x + 'px';
    }
    setVisible(){
        this.UI.style.display="block"
    }
    setInit(){
        this.setUI()
        this.setPosicion()
        this.setVisible()
    }
}