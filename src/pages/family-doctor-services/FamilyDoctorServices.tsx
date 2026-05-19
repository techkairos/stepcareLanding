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
        <title>Family Doctor Services - Stepcare</title>
        <meta name="description" content="Choose a top family medicine doctor in Whitefield. Stepcare provides comprehensive primary healthcare for families in Whitefield, led by an experienced family medicine doctor in Bangalore. If you are searching for a trusted family doctor near me or a general physician for family care, our clinic delivers preventive care, chronic disease management and structured family" />
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
      <WhyChoose />
           
      <Treatments />
      <GoogleReviews />
      <FAQ />
      <Footer />
    </>
  );
}