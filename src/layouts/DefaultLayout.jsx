import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <main className="bg-secondary">
                <div className="container py-4 text-white">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}