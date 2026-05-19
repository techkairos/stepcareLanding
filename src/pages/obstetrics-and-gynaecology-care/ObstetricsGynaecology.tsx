import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoogleReviews from "../../components/GoogleReviews";
import Hero from "./Hero";
import TrustMarker from "./TrustMarker";
import DoctorCard from "./DoctorCard";
import WhyChoose from "./WhyChoose";
import Treatments from "./Treatments";
import FAQ from "./FAQ";

export default function FamilyDoctorServicesPage() {
  return (
    <>
      {/* Helmet to set dynamic meta tags */}
      <Helmet>
        <title>Obstetric and Gynaecological - Stepcare</title>
        <meta name="description" content="Looking for the best gynecologist in Bangalore? Get expert UK standard care at Stepcare. Book your consultation now for personalized women’s health support!" />
        <meta name="keywords" content="gynecologist, gynecologist in Bangalore, gynecologist  doctor in Bangalore" />
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
      <WhyChoose />
           
      <Treatments />
      <GoogleReviews />
      <FAQ />
      <Footer />
    </>
  );
}