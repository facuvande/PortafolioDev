import { Link } from "react-router-dom";
import "./PortafolioItem.css";

export const PortafolioItem = ({ id, title, description, technologies = [], linkDeploy, linkGithub }) => {
    const imgSrc = `./proyects/${id}.png`;

    return (
        <div className="portafolio_item">
            <div className="portafolio_item_up">
                <img src={imgSrc} alt={title} />
                <div className="links_container">
                    <Link to={linkDeploy}>Deploy</Link>
                    <Link to={linkGithub}>Github</Link>
                </div>
            </div>
            <div className="portafolio_item_down">
            <h3>{title}</h3>
            <p>{description}</p>
                <div className="technologies_container">
                    {technologies.map((tech) => (
                    <div key={tech} className="technology_container">
                        <img src={`./${tech}.png`} alt={tech} />
                        <span className="technology_name">{tech}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
