import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import VideogameCardIndex from "../components/VideogameCardIndex";

export default function VideogamesPage() {
    const url = import.meta.env.VITE_INDEX_ROUTE;
    const [videogames, setVideogames] = useState([]);
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

    console.log(videogames)
    return (
        <>
            <h1 className="text-center">Explore a collection of amazing videogames</h1>
            <div className="row">
                {
                    isLoading ? (<Loader />)
                    : videogames.map(v => {
                        return (
                            <VideogameCardIndex key={v.id} videogame={v} />
                        )
                    })
                }
            </div>
        </>
    );
}