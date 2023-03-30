import React from "react";
import '../styles/Header.css';



function Header() {
  return (
    <section className="MenuBarra d-flex ">
            <div className="LogoMenu">
                <h1 className="LogoMenutext ms-5">Utopico</h1>
            </div>

            <div className="BotoneMenuText d-flex">
                <button className="bt">
                    <div className="Btmenu m-3">
                        <h2 className="Btmenutext">Nosotros</h2>
                    </div>
                </button>
                <button className="bt">
                    <div className="Btmenu  m-3 ">
                        <h2 className="Btmenutext">Explorar</h2>
                    </div>
                </button>
                <button className="bt">
                    <div className="Btmenu  m-3">
                        <h2 className="Btmenutext"> Juego</h2>
                    </div>
                </button>

                <div className="iconos">
              <img className="iconoredesHeader" src="./RECURSOS/iconoredesHeader.png" alt="" />
                </div>



            </div>



        </section>



  )
  }
export default Header;