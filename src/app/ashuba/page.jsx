import Ashuba from "@/sections/Ashuba";

export const metadata = {
  title: "Ashuba Ceremonies",

  description:
    "Expert guidance for Narayana Bali, Pitru Dosha Parihara, Asthi Visarjana, Tarpana, Shraddha and other ancestral rituals.",

  alternates: {
    canonical: "/ashuba",
  },

  openGraph: {
    title: "Ashuba Ceremonies",
    description:
      "Authentic Vedic rituals for ancestral and post-death ceremonies.",
    url: "/ashuba",
    images: ["/preview_img.png"],
  },
};

export default function Page() {
  return <Ashuba />;
}
