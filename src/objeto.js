//enemigos
//********** Crear un objeto único **********
// const enemigo1 = {
//     //propiedades
//     x: 10,
//     y: 20,
//     color: 'brow',
//     UI: 'elemento clonado del dom',
//     //métodos
//     setUI: function(){
//         //node es el elemento que quiero clonar
//         const node = document.querySelector('#plantilla_enemigo');
//         //clonamos el div node y lo metemos en la propiedad UI
//         enemigo1.UI = node.cloneNode(true);
//         //Lo añadimos al escenario
//         document.querySelector('#escenario').appendChild(enemigo1.UI);
//     },
//     setPosicion: function(){
//         enemigo1.UI.style.top = `${enemigo1.y} px`;
//         enemigo1.UI.style.left = enemigo1.x + 'px';
//     }
// }