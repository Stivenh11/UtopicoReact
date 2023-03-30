import React from "react";
import '../styles/Header.css';



function SeccionValores(props) {

    return (

        <div>



            <div className="card   cardvalores  mx-2 mb-2" style={{ width: "22rem", height: "14rem", margin: "2rem" }}>
                <div className="conteicon d-fle ">



                    <img src= {`./RECURSOS/${props.icono}`} className="card-img-top iconocard  mt-3" alt="..." />

                    
                </div>
                <div className="card-body mb-1">
                    <h1 className="titulocard">{props.titulo}</h1>
                    <p className="card-text   textocard">{props.descripcion}
                    </p>
                </div>
            </div>




        </div>









    )
}
export default SeccionValores;