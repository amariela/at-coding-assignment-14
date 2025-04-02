import heroImg from "../assets/hero.webp";

export default function Home() {
    return (
        <div className="container">
            <div id="heroText">
                <h1>AENA</h1>
                <h1>TEODOCIO</h1>
            </div>
            <img src={heroImg} alt="hero" id="heroImg" />
        </div>
    )
}