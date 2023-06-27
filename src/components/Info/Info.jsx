import './Info.css'
import Typewriter from 'typewriter-effect'
import { InfoItems } from './InfoItem/InfoItems'

export const Info = () => {
    const urlAvatar = `/me.png`

    return (
        <aside className="info__container">
            <div className='info__text'>
                <img src={urlAvatar} alt='Imagen de Facundo Vandecaveye' className='info__img'/>
                <h1 className='info__h1'>Facundo Vandecaveye</h1>
                <Typewriter 
                    options={{
                        strings: ['Full Stack Developer', 'Estudiante Ingenieria en Informatica'],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                    className='tiping'
                />
                <div className='separator'></div>
            </div>
            <div className='info__contact'>
                <InfoItems/>
            </div>
            <div className='info_social'>

            </div>
        </aside>
    )
}
