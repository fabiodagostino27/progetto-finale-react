import { Link } from "react-router-dom";

export default function VideogameCard({videogame}) {
    return (
        <Link to={`/videogames/${videogame.id}`} className="col-6 col-md-4 col-lg-3 g-3 text-decoration-none text-reset card-transition pt-2">
            <figure className="w-100 mb-1">
                <img className="w-100 aspect-ratio" src={videogame.imageUrl} alt={videogame.title} />
            </figure>
            <p className="fs-3">{videogame.title}</p>
        </Link>
    );
}