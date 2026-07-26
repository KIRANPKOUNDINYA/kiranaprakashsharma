import Services from "@/pages/Services";

export const metadata = {
  title: "Purohit Services",

  description:
    "Complete Vedic pooja services including Marriage, Gruhapravesha, Satyanarayana Pooja, Namakarana, Upanayana and many more.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Purohit Services",
    description:
      "Professional Vedic rituals for all auspicious occasions.",
    url: "/services",
    images: ["/preview_img.png"],
  },
};

export default function Page() {
  return <Services />;
}