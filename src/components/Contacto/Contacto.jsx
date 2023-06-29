import { Link } from "react-router-dom"
import { ContentLayout } from "../layout/ContentLayout"
import './Contacto.css'

export const Contacto = () => {
    return (
        <ContentLayout>
            <h2>Contacto</h2>
            <h3 className="subtitle">Medios por los cuales puedes contactarme:</h3>
            <div className="Contact_links_container">
                <Link to="https://www.linkedin.com/in/facundo-vandecaveye-b4726319b/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                <Link to="https://github.com/facuvande" target="_blank"><i className="fa-brands fa-github"></i></Link>
                <Link to="mailto:facundovs84@hotmail.com.ar"><i className="fa-solid fa-envelope"></i></Link>        
            </div>
        </ContentLayout>
    )
}
