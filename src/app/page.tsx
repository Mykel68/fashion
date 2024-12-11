import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Downloads from "@/components/Downloads";
import SiteFooter from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import NewsletterSection from "@/components/Newsletter";
import YoungFavourite from "@/components/YoungFavourite";

export default function Home() {
  return (
    <main className="pt-5 flex flex-col gap-y-4">
      <div className="px-14 space-y-5">
        <Navbar />
        <Hero />
      </div>
      <Brands />
      <div className="px-14 space-y-5">
        <NewArrivals />
      </div>
      <Banner />
      <div className="px-14 space-y-5">
        <YoungFavourite />
        {/* <Downloads /> */}
      </div>
      <div className="mt-14">
        <NewsletterSection />
        <SiteFooter />
      </div>
    </main>
  );
}
