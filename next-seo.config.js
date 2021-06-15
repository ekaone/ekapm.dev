const title = "Eka Prasetia";
const description = "Designer, developer and maker of things.";

const SEO = {
  title,
  description,
  canonical: "https://ekapm.dev/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ekapm.dev/",
    title,
    description,
    images: [
      {
        url: "https://ekapm.dev/static/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@dannyeka",
    site: "@dannyeka",
    cardType: "summary_large_image",
  },
};

export default SEO;
