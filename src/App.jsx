import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { HomePage } from "@pages/Homepage";
import { MapPage } from "@pages/Mappage";
import { PricePage } from "@pages/Pricepage";
import { DemontazhPage } from "@pages/Demontazhpage";
import { GalleryPage } from "@pages/Gallerypage";
import { LicensePage } from "@pages/Licensepage";
import { BranchPage } from "@pages/Branchpage";
import { NoPage } from "@pages/Nopage";
import house from "./house.svg";

const Layout = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={house} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className="link" to="/price">
                  Цены
                </Link>
              </li>
              <li>
                <Link className="link" to="/map">
                  Схема проезда
                </Link>
              </li>
              <li>
                <Link className="link" to="/demontazh">
                  Демонтаж
                </Link>
              </li>
              <li>
                <Link className="link" to="/photos">
                  Фотогалерея
                </Link>
              </li>
              <li>
                <Link className="link" to="/license">
                  Лицензии
                </Link>
              </li>
              <li>
                <Link className="link" to="/filialy">
                  Наши филиалы
                </Link>
              </li>
            </ul>
          </nav>

          <Outlet />
        </header>
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="price" element={<PricePage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="demontazh" element={<DemontazhPage />} />
          <Route path="photos" element={<GalleryPage />} />
          <Route path="license" element={<LicensePage />} />
          <Route path="filialy" element={<BranchPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
