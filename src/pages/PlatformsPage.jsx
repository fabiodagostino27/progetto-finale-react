import { useState, useEffect } from "react";
import axios from "axios";
import PlatformCard from "../components/PlatformCard";
import Loader from "../components/Loader";

export default function PlatformsPage() {
    const url = import.meta.env.VITE_PLATFORMS_ROUTE;
    const [platforms, setPlatforms] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
            .then((res) => {
                setPlatforms(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching platforms" + err);
                setIsLoading(false);
            })
    }, []);

    if (!platforms) {
        return <Loader />
    }

    console.log(platforms)
    return (
        <>
            <h1 className="text-center mb-4">Supported Platforms</h1>
            <div className="row justify-content-center">
                <div className="row gap-3 justify-content-center">
                    {
                        isLoading ? (<Loader />)
                            : platforms.map(p => {
                                return <PlatformCard key={p.id} platform={p} />
                            })
                    }
                </div>
            </div>
        </>
    );
}