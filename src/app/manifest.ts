import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amenity Booking App",
    short_name: "Amenities",
    description: "Resident amenity and party room booking platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#245c4a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
