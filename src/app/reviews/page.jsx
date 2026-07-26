import Reviews from "@/pages/Reviews";

export const metadata = {
  title: "Customer Reviews",

  description:
    "Read testimonials and reviews from families who trusted Kiranaprakashsharma for Vedic rituals and pooja services.",

  alternates: {
    canonical: "/reviews",
  },

  openGraph: {
    title: "Customer Reviews",
    description:
      "Client experiences and feedback for professional pooja services.",
    url: "/reviews",
    images: ["/preview_img.png"],
  },
};

export default function Page() {
  return <Reviews />;
}
