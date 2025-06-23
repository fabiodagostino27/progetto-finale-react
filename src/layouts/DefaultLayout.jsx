import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <main className="bg-secondary-subtle">
                <div className="container py-4">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}