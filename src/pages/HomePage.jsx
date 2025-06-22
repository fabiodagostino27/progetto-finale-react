import { useEffect, useState } from "react";
import axios from "axios";
import VideogameCard from "../components/VideogameCard";
import Loader from "../components/Loader";

export default function HomePage() {
    const [videogames, setVideogames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        axios.get("http://localhost:8080/api/videogames/random")
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
                            <VideogameCard key={v.id} videogame={v} />
                        )
                    })

                }
            </div>
        </>
    );
}