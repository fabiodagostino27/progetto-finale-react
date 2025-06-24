import { Link } from "react-router-dom";

export default function PlatformCard({ platform }) {
    const { id, iconUrl, name, manufacturer } = platform;

    return (
        <Link to={`/platforms/${id}`} className="card my-3 col-6 col-md-4 col-lg-3 card-transition text-decoration-none" style={{ width: '18rem' }}>
            <img
                src={iconUrl}
                className="card-img-top p-3 mx-auto d-block"
                alt={`${name} icon`}
                style={{ maxHeight: '150px', objectFit: 'contain' }}
            />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">
                    Manufacturer: {manufacturer}
                </p>
            </div>
        </Link>
    );
};