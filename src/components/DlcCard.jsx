export default function DlcCard({ dlc }) {
    return (
        <div className="col-4 col-md-3 col-lg-2 g-3 text-decoration-none text-reset card-transition pt-2">
            <figure className="w-100 mb-1">
                <img className="w-100 aspect-ratio" src={dlc.imageUrl} alt={dlc.title} />
            </figure>
            <p className="fs-3">{dlc.title}</p>
        </div>
    )
}