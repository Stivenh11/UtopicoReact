import React from "react";
import '../styles/Header.css'


function SeccionJuegoandfooter() {

    return(

    <div>
    <section className="SeccionJuego py-5 " id="juego">
    <div className="portada2 d-flex">
        <img className="portada2 my-5" src="./RECURSOS/portada2.png" style={{width: "41rem",  height: "28rem" }} alt=""/>
    </div>
    <div className="bt-conte d-flex">
        <button className="botonjugar">INICIAR</button>
    </div>


</section>
<section className="SeccionFooter">
    <footer>
        <div className=" foo d-flex pt-5"><img src="./RECURSOS/iconoredesHeader.png" alt=""/></div>

        <div className="contefoo mt-2">
            <p className="utofoo">@Utopico</p>
        </div>

    </footer>
</section>

</div>

    )
}


export default SeccionJuegoandfooter