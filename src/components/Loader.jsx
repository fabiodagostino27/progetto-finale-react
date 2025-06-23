export default function Loader() {
    return (
        <div className=" d-flex justify-content-center align-items-center gap-2 py-5">
            <div className="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <span className="fs-4">Loading</span>
        </div>
    );
}