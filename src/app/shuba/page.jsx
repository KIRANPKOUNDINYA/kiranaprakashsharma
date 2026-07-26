import Shuba from "@/pages/Shuba";

export const metadata = {
  title: "Shuba Ceremonies",

  description:
    "Book Vedic rituals for Marriage, Gruhapravesha, Satyanarayana Pooja, Upanayana, Naming Ceremony and other auspicious occasions.",

  alternates: {
    canonical: "/shuba",
  },

  openGraph: {
    title: "Shuba Ceremonies",
    description:
      "Traditional Hindu ceremonies performed according to Vedic scriptures.",
    url: "/shuba",
    images: ["/preview_img.png"],
  },
};

export default function Page() {
  return <Shuba />;
}