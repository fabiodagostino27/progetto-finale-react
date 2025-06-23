import { useEffect, useState } from "react";
import axios from "axios";
import VideogameCardHome from "../components/VideogameCardHome";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

export default function HomePage() {
    const url = import.meta.env.VITE_INDEX_ROUTE;
    const [videogames, setVideogames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url + "/random")
            .then((res) => {
                setVideogames(res.data);
                setIsLoading(false)
            })
            .catch((err) => {
                console.error("Error fetching videogames:", err);
                setIsLoading(false)
            })
    }, []);

    return (
        <>
            <h1 className="fs-1 fw-bold text-center">Welcome to SlowGaming!</h1>
            <h2 className="text-center my-3">Here are some exciting new games!</h2>
            <div className="m-auto d-flex justify-content-center row">
                {
                    isLoading ? (<Loader />)
                        : videogames.map(v => {
                            return (
                                <VideogameCardHome key={v.id} videogame={v} />
                            )
                        })

                }
                <div className="text-center mt-3">
                    <Link to={"/videogames"} className="btn btn-dark">See More</Link>
                </div>
            </div>
        </>
    );
}