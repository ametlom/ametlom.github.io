import { Helmet } from "react-helmet";

const MetaTags = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Optionally add keywords: */}
    {/* <meta name="keywords" content={keywords} /> */}
  </Helmet>
);

export { MetaTags };
