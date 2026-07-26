import About from "@/pages/About";

export const metadata = {
  title: "About Kiranaprakashsharma",

  description:
    "Learn about Vedic Purohit Kiranaprakashsharma, years of experience, traditions followed, and authentic Hindu rituals.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Kiranaprakashsharma",
    description:
      "Experienced Vedic priest serving Srirangapatna and surrounding areas.",
    url: "/about",
    images: ["/preview_img.png"],
  },
};

export default function Page() {
  return <About />;
}