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

export default function MentalWellnessServices() {
  return (
    <>
      {/* Helmet to set dynamic meta tags */}
       <Helmet>
              <title>Mental Wellness Services - Stepcare</title>
              <meta name="description" content="Get personalized mental health services from expert doctors at Stepcare. We offer anxiety, depression, and stress management solutions." />
              <meta name="keywords" content="mental health, wellness, anxiety treatment, depression help, stress management, psychiatrist" />
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