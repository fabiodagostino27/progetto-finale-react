import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SingleVideogamePage from "./pages/SingleVideogamePage";
import VideogamesPage from "./pages/VideogamesPage";
import PlatformsPage from "./pages/PlatformsPage";
import SinglePlatformPage from "./pages/SinglePlatformPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/videogames" Component={VideogamesPage} />
            <Route path="/videogames/:id" Component={SingleVideogamePage} />
            <Route path="/platforms" Component={PlatformsPage} />
            <Route path="/platforms/:id" Component={SinglePlatformPage} />
            <Route path="/404" Component={NotFoundPage} />
            <Route path="*" Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
