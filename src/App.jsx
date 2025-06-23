import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SingleVideogamePage from "./pages/SingleVideogamePage";
import VideogamesPage from "./pages/VideogamesPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/videogames" Component={VideogamesPage} />
            <Route path="/videogames/:id" Component={SingleVideogamePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
