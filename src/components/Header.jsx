import { RiHome2Fill } from "react-icons/ri";
import { IoLogoGameControllerA } from "react-icons/io";
import { MdOutlineLaptopChromebook } from "react-icons/md";

export default function Header() {

    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <span className="navbar-brand mb-0 h1 text-center"><span className="fs-2 text-center">Slow</span><br /><span className="fs-5">Gaming</span></span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav fs-3 ms-auto">
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="/">
                                <RiHome2Fill />
                                <span className="fs-5 ps-1">Home</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="#">
                                <IoLogoGameControllerA />
                                <span className="fs-5 ps-1">Videogames</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="#">
                                <MdOutlineLaptopChromebook />
                                <span className="fs-5 ps-1">Platforms</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}