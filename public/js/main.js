function saludar(){
	alert("Hola desde JavaScript!")
}


function cambiarLogo(){
	//1) Manipulacion de Contenido
	logo.innerHTML = "Noticias <strong>eXtremas</strong>"

	//2) Manipulacion de Estructura
	logo.style.color = "green"
	logo.title = "Una especie de clip, i got it"

	logo.classList.add("text-uppercase")
}




function crearNoticia(titulo, autor, descripcion, imagen,fecha){
	let plantilla = `<article class="row noticia ">
                        <div class="col-12 col-lg-4 noticia-img">
                          <img src="${imagen}" class="img-fluid">
                        </div>

                        <div class="col-12 col-lg-8 noticia-txt">
                          <h3>${titulo}</h3>
                          <p>por ${autor}</p>
                          <p>${descripcion}</p>
                          <p> Fecha :${fecha}</p>
                        </div>

                       </article>`

      let ficha = document.createElement("div")
          ficha.classList.add("col-12", "col-md-6", "col-lg-12")
          ficha.innerHTML = plantilla

      document.querySelector("#ultimas-noticias").appendChild( ficha )
}

/* Manipulacion de un documento HTML */
let logo = document.querySelector(".navbar-brand")

//3) Manipulacion de Comportamiento
logo.onclick = cambiarLogo



//Código de los articles

/*

      let noticia1 = { 
        imagen :"sorteo-libertadores.jpg",
        titulo: "La tecnología llega a la actual edición de la libertadores", 
        autor : "Joaquin Angeli",
        bajada :"La Conmebol anunció la implementación del sistema VAR (asistencia arbitral por video) desde las semifinales de la actual Libertadores."
      }

      let noticia2 = {
        imagen :"tickets-rusia-mundial.jpg",
        titulo:"Comenzó la venta de entradas para el Mundial de Rusia 2018",
        autor :"Laura Smasnatta",
        bajada : "Hoy se abrió la venta al público de tickets, a través del sitio oficial de la FIFA. El proceso se dividirá en dos partes y los espectadores deberán solicitar una tarjeta de hincha 'Fan ID'."
      }

      let noticia3 = { 
        imagen :"firpo.jpg",
        titulo:"A 94 años del derechazo que convirtió en leyenda a Luis Ángel Firpo", 
        autor :"Diego Di Marco",
        bajada : "El 14/9/1923 el boxeador argentino enfrento en Nueva York a Jack Dempsey, uno de los mejores pesos pesados de la historia."
      }

      let noticia4 = {
        imagen :"buenos-aires.jpg",
        titulo:"Buenos Aires 2018 presentó su innovador proyecto de parques y de ceremonia inaugural ante el COI", 
        autor :"Melina Morales", 
        bajada : "El Comité Organizador de los Juegos de la Juventud presentó su concepto de parques ante la 131a sesión del Comité Olímpico Internacional (COI) que se realizó en Lima. La ceremonia inaugural se realizará al aire libre." 
       

       */