import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";

const MetaTags = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Optionally add keywords: */}
    {/* <meta name="keywords" content={keywords} /> */}
  </Helmet>
);

const HomePage = () => {
  return (
    <div>
      <MetaTags
        title="Прием металлолома"
        description="Покупка лома черных металлов. Пункт приема металлолома. Лучшие цены"
      />
      {/* Your homepage content */}
      <h1>общее инфо о бизнесе</h1>
    </div>
  );
};

const PricePage = () => {
  return (
    <div>
      <MetaTags
        title="Цены на металлолом"
        description="Оплата металлолома сразу на месте наличными без задержек. Чермет. Цены на металлолом"
      />
      {/* Your pricepage content */}
      <h1>Цены на чёрный лом</h1>
    </div>
  );
};

const MapPage = () => {
  return (
    <div>
      <MetaTags
        title="Схема проезда"
        description="Купим лом черных металлов. Схема проезда. Нефтекамск, ул.Индустриальная 9Б, строение 7/3. Где мы находимся на карте"
      />
      {/* Your mappage content */}
      <h1>Карта проезда и адрес</h1>
    </div>
  );
};

const DemontazhPage = () => {
  return (
    <div>
      <MetaTags
        title="Демонтаж металлолома"
        description="Быстро демонтируем ваш металлолом. Вывезем любые металлоконструкции. Нефтяное оборудование. Заводское оборудование"
      />
      {/* Your demontazhpage content */}
      <h1>Демонтаж металлолома</h1>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <div>
      <MetaTags
        title="Наши фотографии"
        description="Амет-ресурс — прием лома черного металла. город Нефтекамск. Мы купим дорого и переработаем ваш металлолом. Возможен демонтаж и вывоз"
      />
      {/* Your gallerypage content */}
      <h1>Фотогалерея</h1>
    </div>
  );
};

const LicensePage = () => {
  return (
    <div>
      <MetaTags
        title="Лицензии компании"
        description="Амет-ресурс — официально зарегистрированное на территории России предприятие, которое осуществляет деятельность по сбору, переработке и реализации лома"
      />
      {/* Your licensepage content */}
      <h1>Лицензии</h1>
    </div>
  );
};

const BranchPage = () => {
  return (
    <div>
      <MetaTags
        title="Филиалы компании"
        description="Филиалы в городах: Нефтекамск, Уфа, Стерлитамак. Адреса филиалов"
      />
      {/* Your branchpage content */}
      <h1>Наши филиалы</h1>
    </div>
  );
};

const NoPage = () => {
  return (
    <div>
      {/* Your nopage content */}
      <h1>404</h1>
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/price">Цены</Link>
          </li>
          <li>
            <Link to="/map">Схема проезда</Link>
          </li>
          <li>
            <Link to="/demontazh">Демонтаж</Link>
          </li>
          <li>
            <Link to="/photos">Фотогалерея</Link>
          </li>
          <li>
            <Link to="/license">Лицензии</Link>
          </li>
          <li>
            <Link to="/filialy">Наши филиалы</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

function App() {
  //const [count, setCount] = useState(5);

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
