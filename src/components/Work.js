import { WORKS } from "../assets/data";
import { FaGithub } from "react-icons/fa6";

export default function Work() {
    return (
    <div className="block">
        <h2>WORK</h2>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
            {WORKS.map(work => (
                
                <div key={work.id} class="card d-inline-block bg-dark text-white">
                    <img class="card-img" src={work.imgSrc} alt="Card background" />
                    <div class="card-img-overlay d-flex flex-column justify-content-center">
                        <h4 class="card-title"><strong>{work.title}</strong></h4>
                        <p class="card-text">{work.description}</p>
                        <p class="card-text">Built with: <br />{work.techList}</p>
                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="cardLink text-decoration-none btn text-white fs-2"><FaGithub /></a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}