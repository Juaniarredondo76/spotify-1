//pasos para consumir datos de un api
//con js puro

//1. Ir  un servidor y darle la URI del servicio
const URI="https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm/top-tracks?market=US"
//PERMISO
const TOKEN="Bearer BQDxMh24XEXaeNPXU6HTvwraYkxT33PiQ9cR9g12EGOTi27NGq2_pHNI0k3kkxXWd4zKqsFCw6ObpFyeR8ZSH1knCojv_US9E5X0buitXWNVxENaPTOmumGPn0hG6dUDZfy6vBWELZqj4wuNN5JvHybRauQlMhcvapo"
//2. CONFIGURO: CON METODOS CABECERAS Y CUERPO DE LA PETICION
//primer atributo es el metodo, 
//segundo headers
//tercero cuerpo
const PARAMATROS_PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//4.Consumo el API (Le toco la puerta al servidor)
//el fetch es el metodo para tocarle la puerta al servidor
// fetch(Direccion, configuracion)
fetch(URI,PARAMATROS_PETICION)
//si todo funciona verificar que el formato este en json  por las reglas de la REST
.then(respuesta=> respuesta.json())
.then(function(respuesta){
    let fila= document.getElementById("fila")
    
    respuesta.tracks.forEach(function (cancion){  
       /* console.log(cancion.name) 
        console.log(cancion.preview_url) 
        console.log(cancion.album.images[0].url)*/

        let columna=document.createElement("div")
        //a columna le agregagamos la clase col
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-100")
        imagen.classList.add("p-3")
        imagen.src=cancion.album.images[0].url

        let separador = document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let cuadroTexto = document.createElement("div")
        cuadroTexto.classList.add("px-3")
        cuadroTexto.classList.add("text-center")
    
        let nombreCancion = document.createElement("h4")
        nombreCancion.textContent=cancion.name

        let direccionCancion = document.createElement("audio")
        direccionCancion.src=cancion.preview_url
        direccionCancion.setAttribute("controls","controls")


        cuadroTexto.appendChild(nombreCancion)
        cuadroTexto.appendChild(direccionCancion)
    
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(cuadroTexto)
        
        columna.appendChild(tarjeta)
        fila.appendChild(columna)



    }) 
  

 
    
}) 
//si todo falla
.catch(respuesta=> console.log("ERROR: "+respuesta))

function pintarCanciones(canciones){
    console.log("estamos pintando...")
    console.log(canciones)
}