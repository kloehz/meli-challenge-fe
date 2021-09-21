import { Link } from "react-router-dom"

export const NotResuts = () => {
    return (
        <div className="not-results-container">
            <h2>No se encrontraron resultados para su busqueda.</h2>
            <Link to="/" className="not-found-link">Ir a la pagina principal</Link>
        </div>
    )
}
