import { useState } from "react"
import { getHabilidades } from "../../helpers/getHabilidades"
import { HabilidadItem } from "../HabilidadItem/HabilidadItem"
import './Habilidades.css'

export const Habilidades = () => {

    const [ categorySelected, setCategorySelected ] = useState('all')

    const onClickButton = (category) => {
        setCategorySelected(category)
    }

    return (
        <>
            <h2>Habilidades</h2>
            <div className="sobreMi_habilidades_container">
                <div className="habilidades_titles">
                    <button onClick={() => onClickButton('frontend')} className={(categorySelected === 'frontend') ? 'is-active' : ''}>Frontend</button>
                    <button onClick={() => onClickButton('backend')} className={(categorySelected === 'backend') ? 'is-active' : ''}>Backend</button>
                    <button onClick={() => onClickButton('all')} className={(categorySelected === 'all') ? 'is-active' : ''}>Todas</button>
                    <button onClick={() => onClickButton('extra')} className={(categorySelected === 'extra') ? 'is-active' : ''}>Extras</button>
                </div>
                <div className="separator"></div>
                <div className="habilidades_icons">
                    {
                        getHabilidades(categorySelected).map(habilidad => (
                            <HabilidadItem {...habilidad}/>
                        ))
                    }
                </div>
            </div>  
        </>

    )
}
