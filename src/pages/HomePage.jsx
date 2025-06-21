import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
    const [videogames, setVideogames] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/videogames/random")
            .then((res) => setVideogames(res.data))
            .catch((err) => console.error("Error fetching videogames:", err));
    }, []);

    return (
      <>
        <h1 className="fs-1 fw-bold text-center">Welcome to SlowGaming!</h1>

        <h2>Here are some exciting new games!</h2>
        <div className="m-auto d-flex row">
            {
                videogames.map(v => {
                    return (
                        <div key={v.id} className="col-4">
                            <figure className="w-100">
                                <img className="w-100" src={v.imageUrl} alt={v.title} style={{aspectRatio: '3 / 4'}} />
                            </figure>
                            <p>{v.title}</p>
                        </div>
                    )
                })
            }
        </div>
      </>  
    );
}