import { Habilidades } from '../Habilidades/Habilidades'
import { ContentLayout } from '../layout/ContentLayout'
import './Sobremi.css'

export const Sobremi = () => {
    return (
        <ContentLayout>
            <div className='sobreMi__container'>
                <h2>Sobre Mi</h2>
                <p>Estudio Ing. En Informática desde el 2022, llevo tiempo especializándome en el Desarrollo web fullStack. Dedicó gran parte de mi tiempo en crecer como desarrollador, generando experiencia desde la construcción de distintos proyectos.
                <br/>
                Me encuentro invirtiendo mucho tiempo en mis estudios para poder lograr ser un buen desarrollador full stack y poder conseguir mi primer experiencia laboral y poder dar mi granito de arena a la empresa que me contrate. Soy una persona apasionada al estudio y con gran capacidad de resolución de problemas y sobre todo un desarrollador dispuesto a enseñar y aprender de los demás
                </p>
                <div className='separator'></div>

                <Habilidades/>
            </div>
        </ContentLayout>
    )
}
