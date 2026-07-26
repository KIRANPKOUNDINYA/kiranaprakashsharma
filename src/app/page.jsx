import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Reviews from "@/pages/Reviews";
import Shuba from "@/pages/Shuba";
import Ashuba from "@/pages/Ashuba";
import Location from "@/pages/Location";
import Contact from "@/pages/Contact";

export const metadata = {
  title: "Kiranaprakashsharma | Authentic Vedic Purohit in Srirangapatna",
  description:
    "Book expert Vedic Purohit Kiranaprakashsharma in Srirangapatna for Shuba and Ashuba ceremonies including Marriage, Gruhapravesha, Narayana Bali, Pitru Dosha Parihara and Asthi Visarjana.",
};

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Reviews />
      <Shuba showBackButton={false} />
      <Ashuba showBackButton={false} />
      <Location />
      <Contact />
    </>
  );
}
