import { RiHome2Fill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-center"><span className="fs-2 text-center">Slow</span><br /><span className="fs-5">Gaming</span></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav fs-3 ms-auto gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center" to={"/"}>
                                <RiHome2Fill />
                                <span className="fs-5 ps-1 d-inline d-lg-none">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center" to={"/videogames"}>
                                <IoGameController />
                                <span className="fs-5 ps-1 d-inline d-lg-none">Videogames</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center" to={"/platforms"}>
                                <MdOutlineLaptopChromebook />
                                <span className="fs-5 ps-1 d-inline d-lg-none">Platforms</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}