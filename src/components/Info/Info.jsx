import './Info.css'
import Typewriter from 'typewriter-effect'
import { InfoItems } from './InfoItem/InfoItems'
import { useState } from 'react'
import { useEffect } from 'react'

export const Info = () => {
    const urlAvatar = `/me.png`

    const [contactVisibility, setContactVisibility] = useState(true)
    const [isButtonVisible, setIsButtonVisible] = useState(true)


    useEffect(() => {
        const handleResize = () => {
            setIsButtonVisible(window.innerWidth > 470)
        }
        
        // Agregar un event listener para actualizar la visibilidad del botón cuando la ventana cambia de tamaño
        window.addEventListener('resize', handleResize)
        handleResize() // Llamar a la función al principio para establecer la visibilidad inicial
    
        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const changeVisibility = () => {
        setContactVisibility(!contactVisibility)
        // (contactVisibility) ? setContactVisibility(false) : setContactVisibility(true) 
    }

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
                {isButtonVisible && (
                    <button className='button-show-items' onClick={changeVisibility}>
                        {contactVisibility ? 'Ocultar' : 'Ver'} contacto
                    </button>
                )}
                {(contactVisibility || !isButtonVisible) && <InfoItems />}
            </div>
        </aside>
    )
}
