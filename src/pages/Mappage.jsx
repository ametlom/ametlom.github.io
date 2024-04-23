import { MetaTags } from "@components/Metatags";

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

export { MapPage };
