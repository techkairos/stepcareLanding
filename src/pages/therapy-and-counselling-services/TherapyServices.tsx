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

export default function TherapyServicesPage() {
  return (
    <>
      {/* Helmet to set dynamic meta tags */}
      <Helmet>
        <title>Therapy and Counselling Services - Stepcare</title>
        <meta name="Choose compassionate therapy &amp; counselling services in Bangalore Stepcare offers professional therapy sessions and psychological consultation in Whitefield, including stress management support, emotional wellbeing counselling, trauma care, behavioural therapy and structured mental health guidance delivered with empathy and clinical expertise. We believe in prioritising your health with compassion and convenience. Name Email Address Phone Number" />
        <meta name="keywords" content="professional therapy sessions, mental health guidance, emotional wellbeing counselling, trauma care, family care" />
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