import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoogleReviews from "../../components/GoogleReviews";
import Hero from "./Hero";
import TrustMarker from "./TrustMarker";
import DoctorCard from "./DoctorCard";
import DoctorCardSecond from "./DoctorCardSecond";
import WhyChoose from "./WhyChoose";
import Treatments from "./Treatments";
import FAQ from "./FAQ";

export default function DermatologyServicesPage() {
  return (
    <>
      {/* Helmet to set dynamic meta tags */}
      <Helmet>
        <title>Dermatology Services - Stepcare</title>
        <meta name="description" content="Choose evidence-based skincare led by trusted dermatologists in Bangalore Stepcare delivers evidence-based skincare in Whitefield, offering advanced pigmentation treatments like chemical peels, permanent laser hair reduction, hair restoration with PRP and GFC, effective hair loss treatments, wart removal, and more, all performed by experienced dermatologists. We believe in prioritising your health with compassion and convenience" />
        <meta name="keywords" content="family health, family medicine doctor, family medicine doctor in Bangalore, cardiologist, family care" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_TRACKING_ID');
          `}
        </script>
      </Helmet>

      {/* Page Components */}
      <Header />
      <Hero />
      <TrustMarker />
      <DoctorCard />
      <DoctorCardSecond />        
      <WhyChoose />
           
      <Treatments />
      <GoogleReviews />
      <FAQ />
      <Footer />
    </>
  );
}