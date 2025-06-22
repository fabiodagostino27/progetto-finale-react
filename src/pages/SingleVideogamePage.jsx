import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleVideogamePage() {
    const {id} = useParams();
    const [videogame, setVideogame] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/videogames/${id}`)
            .then((res) => {
                setVideogame(res.data);         
            })
    }, [])
    console.log(videogame)
    return (
        <h1>Single page</h1>
    )
}