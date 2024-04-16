export type SlideImagesT = {
  src: string;
  alt: string;
  coords: { lat: number; lon: number };
}[];

export const images: SlideImagesT = [
  {
    src: "/slideshow/chichen-itza.jpg",
    alt: "El Castillo, Chichen Itza",
    coords: { lat: 20.682985, lon: -88.568649 },
  },
  {
    src: "/slideshow/great-wall-china.jpg",
    alt: "Great Wall of China",
    coords: { lat: 40.4319, lon: 116.570374 },
  },
  {
    src: "/slideshow/machu-picchu.jpg",
    alt: "Machu Picchu",
    coords: { lat: -13.163068, lon: -72.545128 },
  },
  {
    src: "/slideshow/statue-of-liberty.jpg",
    alt: "Statue of Liberty",
    coords: { lat: 40.6892, lon: -74.0445 },
  },
  {
    src: "/slideshow/petra-jordan.jpg",
    alt: "The Treasury, Al-Khazneh",
    coords: { lat: 30.3221, lon: 35.4517 },
  },
  {
    src: "/slideshow/statue-rio.jpg",
    alt: "Christ Statue, Rio de Janeiro",
    coords: { lat: -22.9519, lon: -43.2105 },
  },
  {
    src: "/slideshow/the-taj-mahal.jpg",
    alt: "Taj Mahal, Agra India",
    coords: { lat: 27.1751, lon: 78.0421 },
  },
];
