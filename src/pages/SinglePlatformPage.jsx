import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import VideogameCardIndex from "../components/VideogameCardIndex";

export default function SinglePlatformPage() {
    const url = import.meta.env.VITE_PLATFORMS_ROUTE;
    const { id } = useParams();
    const [platform, setPlatform] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url + `/${id}`)
            .then((res) => {
                setPlatform(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching platform: " + err);
                setIsLoading(false);
            })
    }, [id]);

    if (!platform) {
        return (
            <div className="text-center">
                <h1>Whoops! Something went wrong!</h1>
                <Link to={"/platforms"} className="btn btn-dark my-4">Platforms Page</Link>
            </div>
        );
    }

    return (
        <div className="container py-4">
            {
                isLoading ? (<Loader />)
                    : (
                        <>
                            <div className="card shadow-sm mb-5 p-4 text-center d-flex flex-column align-items-center">
                                {platform.iconUrl && (
                                    <img
                                        src={platform.iconUrl}
                                        alt={`${platform.name} icon`}
                                        className="img-fluid mb-3"
                                        style={{ maxHeight: '96px', maxWidth: '96px' }}
                                    />
                                )}
                                <h1 className="display-4 fw-bold text-dark mb-2">{platform.name}</h1>
                                <p className="lead text-muted">Manufacturer: <span className="fw-semibold">{platform.manufacturer}</span></p>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-center text-dark mb-4">Games Available on {platform.name}</h2>

                                {platform.videogames && platform.videogames.length > 0 ? (
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                                        {platform.videogames.map((v) => (
                                            <VideogameCardIndex key={v.id} videogame={v} />
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-center text-muted lead">No videogames listed for this platform yet.</p>
                                )}
                            </div>
                        </>
                    )
            }
        </div>
    );
}