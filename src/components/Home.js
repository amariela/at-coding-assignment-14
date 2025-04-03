import heroImg from "../assets/hero.jpg";
import { ABOUT } from "../assets/data";

export default function Home() {
    return (
        <>
            <div className="block">
                <div id="heroText">
                    <h1>AENA</h1>
                    <h1>TEODOCIO</h1>
                </div>
                <img src={heroImg} alt="Photo by Lorenzo on Unsplash" id="heroImg" />
            </div>
            <div id={ABOUT[0].id}>
                <h4>{ABOUT[0].title}</h4>
                <p>
                    {ABOUT[0].text}
                </p>
            </div>
        </>
    )
}