import Nav from "../nav/Nav";

export default function Accueil() {
    return (
        <>
           <div className="container">
            <Nav />
            <h1 className="card bg-secondary text-center py-5">Welcome to my web site</h1>
           </div>
        </>
    );
}
