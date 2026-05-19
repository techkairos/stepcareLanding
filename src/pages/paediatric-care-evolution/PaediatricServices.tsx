import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoogleReviews from "../../components/GoogleReviews";
import Hero from "./Hero";
import TrustMarker from "./TrustMarker";
import DoctorCard from "./DoctorCard";
// import DoctorCardSecond from "./DoctorCardSecond";
import DoctorCardThree from "./DoctorCardThree";
import WhyChoose from "./WhyChoose";
import Treatments from "./Treatments";
import FAQ from "./FAQ";


export default function PaediatricServicesPage() {
  return (
    <>
      {/* Helmet to set dynamic meta tags */}
      <Helmet>
        <title>Compassionate Paediatric Care - Stepcare </title>
        <meta name="description" content="Compassionate Paediatric Care &amp; Child Vaccination Services in Bangalore At Stepcare, we care for your child like our own. Our comprehensive paediatric services in Whitefield include regular health checkups, expert paediatric consultations, child vaccination and immunisation, structured growth tracking, illness management, and adolescent care &#8211; all delivered by experienced child specialists in Bangalore. We believe" />
        <meta name="keywords" content="Compassionate Paediatric, structured growth tracking, family medicine doctor in Bangalore, illness management, family care" />
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
      {/* <DoctorCardSecond /> */}
      <DoctorCardThree />        
      <WhyChoose />
           
      <Treatments />
      <GoogleReviews />
      <FAQ />
      <Footer />
    </>
  );
}