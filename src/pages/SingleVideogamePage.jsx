import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { IoArrowBack } from "react-icons/io5";

export default function SingleVideogamePage() {
    const url = import.meta.env.VITE_INDEX_ROUTE;
    const navigate = useNavigate();
    const { id } = useParams();
    const [videogame, setVideogame] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url + `/${id}`)
            .then((res) => {
                setVideogame(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching videogames:", err);
                setIsLoading(false)
            })
    }, [])


    if (!videogame) {
        return <Loader />
    }


    return (
        <>
            {
                isLoading ? (<Loader />)
                    : (
                        <div className="container py-4">
                            <div className="row justify-content-center mb-4">
                                <div className="col-12 text-center">
                                    <h1 className="display-4 fw-bold mb-3">{videogame.title}</h1>
                                    <p className="lead fs-3 text-black-50">An immersion into the world of {videogame.title}.</p>
                                </div>
                            </div>

                            <div className="row justify-content-center text-white g-4">
                                <div className="col-12 col-md-10 col-lg-10">
                                    <div className="bg-dark p-4 rounded shadow-lg d-md-flex align-items-stretch">
                                        <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                                            <figure className="mb-0 w-100">
                                                <img
                                                    className="img-fluid rounded shadow-lg"
                                                    src={videogame.imageUrl}
                                                    alt={videogame.title}
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                            </figure>
                                        </div>

                                        <div className="col-12 col-md-7 ps-md-4">
                                            <h2 className="text-primary mb-3">Game Details</h2>
                                            <ul className="list-unstyled mb-4">
                                                {videogame.developerStudio && (
                                                    <li className="mb-2">
                                                        <strong>Developer:</strong> <span className="text-info">{videogame.developerStudio}</span>
                                                    </li>
                                                )}
                                                {videogame.publisher && (
                                                    <li className="mb-2">
                                                        <strong>Publisher:</strong> <span className="text-info">{videogame.publisher}</span>
                                                    </li>
                                                )}
                                            </ul>


                                            {videogame.platforms && videogame.platforms.length > 0 && (
                                                <>
                                                    <h3 className="text-primary mb-3 mt-4">Available on:</h3>
                                                    <div className="table-responsive">
                                                        <table className="table table-dark table-striped table-hover caption-top">
                                                            <tbody>
                                                                {videogame.platforms.map((platform) => (
                                                                    <tr key={platform.id}>
                                                                        <td className="text-center align-middle">
                                                                            {platform.iconUrl && (
                                                                                <img
                                                                                    src={platform.iconUrl}
                                                                                    alt={platform.name}
                                                                                    style={{
                                                                                        width: '2.5em',
                                                                                        height: '2.5em',
                                                                                        filter: 'invert(1)'
                                                                                    }}
                                                                                    className="img-fluid"
                                                                                />
                                                                            )}
                                                                        </td>
                                                                        <td className="align-middle">{platform.name}</td>
                                                                        <td className="align-middle">{platform.manufacturer}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </>
                                            )}

                                            <h3 className="text-primary mb-3 mt-4">Description</h3>
                                            <p className="text-white">
                                                {videogame.description && videogame.description.length > 0
                                                    ? videogame.description
                                                    : "Description not available for this videogame."
                                                }
                                            </p>

                                            <div className="mt-4 text-center">
                                                <button className="btn btn-outline-light btn-lg px-4" onClick={() => navigate(-1)}>
                                                    <IoArrowBack /> Go Back
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>

    );
}