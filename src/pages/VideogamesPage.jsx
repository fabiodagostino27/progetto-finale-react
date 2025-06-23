import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import VideogameCardIndex from "../components/VideogameCardIndex";
import { FaSearch } from "react-icons/fa";

export default function VideogamesPage() {
    const url = import.meta.env.VITE_VIDEOGAMES_ROUTE;
    const [videogames, setVideogames] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
            .then((res) => {
                setVideogames(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching videogames:", err);
                setIsLoading(false);
            })
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.get(url + `/search?title=${query}`)
            .then((res) => {
                setVideogames(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching videogames:", err);
                setIsLoading(false);
            })
    }

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <h1 className="text-center">Explore a collection of amazing videogames</h1>
            <form onSubmit={handleSearchSubmit} className="d-flex align-items-center my-4">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search by title..."
                    className="form-control rounded-end-0"
                />
                <button
                    type="submit"
                    className="btn btn-dark rounded-start-0"
                >
                    <FaSearch />
                </button>
            </form>
            <div className="row">
                {
                    isLoading ? (<Loader />)
                    : (videogames.length === 0) ? (<p className="text-center fs-4">No games have been found.</p>)
                    :  videogames.map(v => {
                            return (
                                <VideogameCardIndex key={v.id} videogame={v} />
                            )
                        })
                }
            </div>
        </>
    );
}