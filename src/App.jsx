
import './App.css'
import Header from './components/Header'
import SeccionInicio from './components/SeccionInicio'
import SeccionValores from './components/SeccionValores'
import Seccionproyecto from './components/Seccionproyecto'
import SeccionJuegoandfooter from './components/SeccionJuegoandfooter'

function App() {



    return (
        <div className='App'>
            <Header />
            <SeccionInicio />


            <div className=' Seccionvalorescontendor  ' >



                <div >

                    <SeccionValores
                        icono='iconoObjetivo.png'
                        titulo='Objetivo'
                        descripcion='Facilitar la comprensión de la norma del código de policía que habla sobre el uso del espacio público en Colombiapor medio de un juego web, para que así haya un buen manejo de este'



                    />


                    <SeccionValores
                        icono='iconoEmpresa.png'
                        titulo='Empresa'
                        descripcion='Somos un equipo de trabajo enfocado en el diseño y creación de un proyecto enfocado en un juego web que ayude a transmitir el conocimiento del buen manejo del espacio público y las normas que lo rigen.'

                    />
                </div>

                <div >

                    <SeccionValores
                        icono='iconoMision.png'
                        titulo='Visión'
                        descripcion='Ser el foco de conocimiento sobre las normas del cuidado del espacio público, y brindar esa herramienta de trasformación de la sociedad a través de la educación'



                    />

                    <SeccionValores
                        icono='iconoVision.png'
                        titulo='Misión'
                        descripcion='Fomentar y ayudar a la implementación de la norma del cuidado del espacio público, para garantizar una convivencia social., a través de una metodología de enseñanza y dinamismo.'



                    />

                </div>

            </div>




            <Seccionproyecto />

            <SeccionJuegoandfooter />
        </div>

    )

}

export default App
