import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustMarker } from "./components/TrustMarker";
import { DoctorCard } from "./components/DoctorCard";
import { WhyChoose } from "./components/WhyChoose";
import { Treatments } from "./components/Treatments";
import { GoogleReviews } from "./components/GoogleReviews";
// import { Awards } from "./components/Awards";
// import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
// import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustMarker />
      <DoctorCard />
      <WhyChoose />
      <Treatments />
      <GoogleReviews />
      {/* <Awards /> */}
      {/* <Testimonials /> */}
      <FAQ />
      {/* <FinalCTA /> */}
      <Footer />
    </div>
  );
}
