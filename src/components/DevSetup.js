import { DEVSETUPS } from "../assets/data";

export default function DevSetup() {
    return (
        <div className="block row flex-column">
            <h2>DEV SETUP</h2>
            <div className="d-flex flex-column gap-3 align-items-center">
                {DEVSETUPS.map((setup) => (
                    <div key={setup.id} className="card w-75 block bg-black text-white p-3">
                        <h4 className="card-title"><strong>{setup.title}</strong></h4>
                        <p className="card-text">{setup.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
