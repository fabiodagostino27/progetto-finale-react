export default function NotFoundPage() {
    return (
        <div className="container py-5 text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <h2 className="display-4 text-dark mb-3">Page Not Found</h2>
            <p className="lead text-muted mb-4">
                We're sorry, the page you requested could not be found.
                Perhaps you can return to the homepage or try searching.
            </p>
            <a href="/" className="btn btn-dark btn-lg">Go to Homepage</a>
        </div>
    );
}