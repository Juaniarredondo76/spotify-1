//pasos para consumir datos de un api
//con js puro

//1. Ir  un servidor y darle la URI del servicio
const URI="https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm/top-tracks?market=US"
//PERMISOS
const TOKEN="Bearer BQAhlc5868HwWO5XMaH4GBjbm52nGpLmOlD9CwT5C8-efT4lUuRK4qnQboLyrXqa7xf3griQZZu7pf_FmbqIhvXFGrj0oK1glq7VzLn1IXDGeSiswIk7nCXevB_QFknE1hnqz65LoorPRs6qWEfexolczGl5Lkflmng"
//CONFIGURO METODOS CABECERAS Y CUERPO DE LA PETICION
let parametrosPeticion={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//4.Consumo el API (Le toco la puerta al servidor)
//fetch(Direccion, configuracion)
fetch(URI,parametrosPeticion)
//si todo funciona
.then(respuesta=> respuesta.json())


.then(respuestaJSON=> 
   
    respuestaJSON.tracks.forEach(element => {
       console.log(respuestaJSON.tracks) 
    })
    )
    
    //console.log(respuestaJSON.tracks))

//si todo falla
.catch(respuestaERROR=> console.log(respuestaERROR))

