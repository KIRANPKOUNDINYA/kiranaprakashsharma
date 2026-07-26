import Contact from "@/pages/Contact";

export const metadata = {
  title: "Contact Kiranaprakashsharma",

  description:
    "Get in touch to book Purohit services, ask questions, and plan Hindu poojas in Srirangapatna.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Kiranaprakashsharma",
    description:
      "Reach out for booking Vedic rituals, ceremonies, and puja services.",
    url: "/contact",
    images: ["/preview_img.png"],
  },
};

export default function Page() {
  return <Contact />;
}
