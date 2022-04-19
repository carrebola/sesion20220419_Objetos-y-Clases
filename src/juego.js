

//Funciobn para mover cosas
function mover(){
    const frames = setInterval(()=>{   
        enemigo_1.setMover()
        enemigo_2.setMover()
    }, 50)
}

mover()