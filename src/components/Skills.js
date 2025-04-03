import { SKILLS } from "../assets/data";

export default function Skills() {
    return (
        <div className="block">
            <h2>SKILLS</h2>
            <div className="d-flex flex-column align-items-center gap-5">
                {SKILLS.map(skill => (
                    <div key={skill.id} class="card block bg-black text-white p-4 w-75">
                        <h4 class="card-title"><strong>{skill.id}</strong></h4>
                        <p class="card-text">{skill.detail}</p>
                        <p class="card-text"><strong>Tools: </strong>{skill.tools}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}