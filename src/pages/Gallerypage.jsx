import { MetaTags } from "@components/Metatags";

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

export { GalleryPage };
