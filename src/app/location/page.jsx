import Location from "@/pages/Location";

export const metadata = {
  title: "Location Details",

  description:
    "Find Kiranaprakashsharma's service locations with embedded Google Maps and route information for Srirangapatna.",

  alternates: {
    canonical: "/location",
  },

  openGraph: {
    title: "Location Details",
    description:
      "Service location details with maps for Kiranaprakashsharma's Vedic purohit services.",
    url: "/location",
    images: ["/preview_img.png"],
  },
};

export default function Page() {
  return <Location />;
}
