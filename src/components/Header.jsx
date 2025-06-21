import { RiHome2Fill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <span className="navbar-brand mb-0 h1 text-center"><span className="fs-2 text-center">Slow</span><br /><span className="fs-5">Gaming</span></span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav fs-3 ms-auto gap-3">
                        <li class="nav-item">
                            <NavLink class="nav-link d-flex align-items-center" to={"/"}>
                                <RiHome2Fill />
                                <span className="fs-5 ps-1 d-inline d-lg-none">Home</span>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link d-flex align-items-center" href="#">
                                <IoGameController />
                                <span className="fs-5 ps-1 d-inline d-lg-none">Videogames</span>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link d-flex align-items-center" href="#">
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