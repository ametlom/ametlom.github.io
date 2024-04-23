import { MetaTags } from "@components/Metatags";

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

export { HomePage };
