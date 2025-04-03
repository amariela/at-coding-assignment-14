import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { LINKS } from "../assets/data.js"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen])

    return (
        <>
            <div className="position-fixed top-0 end-0 z-3 p-3" id="navBar">
                <button onClick={toggleMenu} className="btn text-white fs-2">
                    {isOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>
            {
                isOpen && (
                    <div className="position-fixed z-2 top-0 w-100 h-100 bg-black text-white row flex-column justify-content-center">
                        <ul className="navbar-nav list-unstyled gap-2 text-center">
                            {LINKS.map(link => (
                                <li key={link.id} className="nav-item d-flex justify-content-center">
                                    <a 
                                        href={`#${link.id}`} 
                                        onClick={toggleMenu} 
                                        className="nav-link text-uppercase text-decoration-none"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </>
    )
}