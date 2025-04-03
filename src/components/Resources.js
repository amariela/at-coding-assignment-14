import { RESOURCES } from "../assets/data";

export default function Resources() {
    return (
        <div className="block">
            <h2>RESOURCES</h2>
            <div className="accordion d-flex flex-column align-items-center" id="resourcesAccordion">
                {RESOURCES.map((resource, index) => (
                    <div key={resource.id} className="accordion-item bg-black border-secondary w-75">
                        <h3 className="accordion-header" id={`heading${index}`}>
                            <button
                                className="accordion-button collapsed fs-5 bg-black text-white"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`collapse${index}`}
                            >
                                <strong>{resource.title}</strong>
                            </button>
                        </h3>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#resourcesAccordion"
                            style={{
                                backgroundImage: `url(${resource.imgSrc})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                            }}
                        >
                            {/* Semi-transparent dark overlay */}
                            <div
                                className="overlay"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.77)",
                                    zIndex: 1, 
                                }}
                            ></div>
                            <div className="accordion-body" style={{ position: "relative", zIndex: 2, padding: "20px" }}>
                                <p className="text-white" >{resource.summary}</p>
                                <a 
                                    href={resource.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-dark"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
