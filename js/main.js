document.addEventListener("DOMcontentLoaded", function(e){

    const parrafos = document.querySelectorAll('.descripcion');

    let distancia = [];
    let distanciaMaxima = 0;

    const aplicarDistancia = (function aplicarDistancia(){

            parrafos.forEach(parrafo=>{

                if(distanciaMaxima == 0){
                    distancia.push(parrafo.clientHeight);
                }else{
                    parrafo.estilo.heigth = distanciaMaxima + "px";
                }

            });

            return aplicarDistancia;

    })();

    distanciaMaxima = Math.max.apply(Math, distancia);

    aplicarDistancia()

});