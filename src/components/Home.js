import heroImg from "../assets/hero.jpg";
import { ABOUT } from "../assets/data";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <div className="block">
                <div id="heroText">
                    <h1>AENA</h1>
                    <h1>TEODOCIO</h1>
                </div>
                <img src={heroImg} alt="Hero by Lorenzo on Unsplash" id="heroImg" className="block" />
                <div id={ABOUT[0].id}>
                    <h4>{ABOUT[0].title}</h4>
                    <p>{ABOUT[0].text}</p>
                    <p>
                        <FaRegEnvelope /> {ABOUT[0].email}
                    </p>
                </div>
            </div>
        </>
    )
}