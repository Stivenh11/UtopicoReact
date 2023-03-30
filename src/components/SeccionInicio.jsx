import React from "react";
import '../styles/Header.css';



function SeccionInicio() {
    return (
        <section className=" SeccionInicio mb-5" id="inicio">
            <div className="row  pt-5 m-3">

                <div className="col-12 col-lg-5"> 
                <img className="portada1 " src="./RECURSOS/portada1.png" style={{width: "100%", height:"100%"}} alt=""/>
                    </div>
                <div className="col-12 col-lg-5 mx-3">
                    <h1 className="Titseccion1 ">Bienvenido</h1>
                    <p className="Desseccion1">UTÓPICO es una aventura en la cual conocerás y aprenderás
                        a usar la norma que rige en tu espacio publico. Ayudado en
                        un mundo, el cual está en completo caos, tu tienes esa
                        misión, Utopico es una gran aventura la cual podras vivir,
                        a traves de la diversion y la educacion.</p>
                </div>


            </div>


        </section>






    )
}
export default SeccionInicio;