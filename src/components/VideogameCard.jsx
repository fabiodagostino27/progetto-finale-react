import { Link } from "react-router-dom";

export default function VideogameCard({videogame}) {
    return (
        <Link to={`/videogames/${videogame.id}`} className="col-12 col-md-6 col-lg-4 g-3">
            <figure className="w-100 mb-1">
                <img className="w-100" src={videogame.imageUrl} alt={videogame.title} style={{ aspectRatio: '3 / 4' }} />
            </figure>
            <p className="fs-3">{videogame.title}</p>
        </Link>
    );
}