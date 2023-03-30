import React from "react";
import '../styles/Header.css'


function Seccionproyecto() {
return(
    <section>

            <div className="row proyecto d-flex m-3 py-5 ">
                <div className="col-12 col-lg-2 contelineador">
                    <li className="lineador"></li>
                </div>

                <div className=" col-12 col-lg-4  ">
                    <h1 className="titulocardpro">Problematica</h1>
                    <p className="card-textpro">El espacio público estos últimos años se ha visto invadido por el
                        mal uso de este, como consecuencia, se presentan varios accidentes,
                        escándalos y la inseguridad del lugar público, y esto por ende afecta
                        la armonia de la sociedad.</p>

                    <h1 className="titulocardpro">Pregunta Problema</h1>
                    <p className="card-textpro"> ¿Como Fomenta la normativa que rige en el espacio publicoo a traves
                        de un juego web accesible a la sociedad?.</p>

                    <h1 className="titulocardpro">Descripción Proyecto</h1>
                    <p className="card-textpro">UTÓPICO es un juego web el cual tuvo un proceso de recolección
                        de información e investigativo que como finalidad arrojó es que existe
                        un alto índice de descontento social por el mal uso del espacio público
                        en Colombia. Nuestro proyecto está enfocado en solucionar esto
                        a través de un método dinámico e interactivo en la web.</p>

                    <h1 className="titulocardpro">Solucion problema</h1>
                    <p className="card-textpro">Presentar a través de nuestro JUEGO WEB , el conocimiento y
                        adecuado uso de las normas del espacio público por medio
                        de un sistema interactivo y de aplicación de estas.</p>



                </div>
                <div className="col-12 col-lg-6 contelineador "> <video controls className="imgproyecto"
                        style={{width: "20rem", height: "16rem"}} src="./RECURSOS/fragmento_animacion.mp4" alt=""/></div>
            </div>

        </section>
    
    )
}

export default Seccionproyecto;