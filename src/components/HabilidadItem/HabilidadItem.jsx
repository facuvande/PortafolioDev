import { FaReact } from 'react-icons/fa'
import './HabilidadItem.css'


export const HabilidadItem = ({id, title, category}) => {
    const urlSrc = `./${id}.png`
    return (
        <div className='habilidad'>
            <img src={urlSrc}/>
            <p>{title}</p>
        </div>
    )
}
