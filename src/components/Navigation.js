import { FaBars } from "react-icons/fa6";

export default function Navigation() {
    return (
        <div className="sticky-top" id="navBar">
            <div className="container text-end">
                <button className="btn text-white fs-2">
                    <FaBars />
                </button>
            </div>
        </div>
    )
}