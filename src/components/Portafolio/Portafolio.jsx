import { proyectos } from "../../data/proyectos"
import { PortafolioItem } from "../PortafolioItem/PortafolioItem"
import { ContentLayout } from "../layout/ContentLayout"
import './Portafolio.css'

export const Portafolio = () => {
    return (
        <ContentLayout>
            <h2>Portafolio</h2>
            <h3 className="subtitle">Proyectos que he realizado a lo largo de mi carrera como Developer</h3>
            <div className="portafolio_items_container">
                {
                    proyectos.map(proyecto => (
                        <PortafolioItem key={proyecto.id} {...proyecto}/>
                    ))
                }
            </div>
        </ContentLayout>
    )
}
