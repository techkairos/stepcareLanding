import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MentalWellnessPage from './pages/mental-wellness-services/MentalWellnessServices';
import GynaecologyPage from './pages/obstetrics-and-gynaecology-care/ObstetricsGynaecology';
import FamilyDoctorServicesPage from "./pages/family-doctor-services/FamilyDoctorServices";
import DermatologyServicesPage from "./pages/dermatology-services/DermatologyServices";
import TherapyServicesPage from "./pages/therapy-and-counselling-services/TherapyServices";
import PaediatricServicesPage from "./pages/paediatric-care-evolution/PaediatricServices";
import GeneralPractitionerServicesPage from "./pages/general-practitioner/GeneralPractitioner";
import NutritionistServicesPage from "./pages/nutritionist-in-bangalore/NutritionistBangalore";
import CardiologistServicesPage from "./pages/cardiologist-in-bangalore/CardiologistBangalore";
import OrthopaedicSpecialistServicesPage from "./pages/orthopaedic-specialist/OrthopaedicSpecialist";



import ThankYouMentalWellness from './pages/mental-wellness-services/ThankYou';
import ThankYouGynaecology from './pages/obstetrics-and-gynaecology-care/ThankYou';
import ThankYouFamily from './pages/family-doctor-services/ThankYou';
import ThankYouDermatology from './pages/dermatology-services/ThankYou';
import ThankYouTherapy from './pages/therapy-and-counselling-services/ThankYou';
import ThankYouPaediatric from './pages/paediatric-care-evolution/ThankYou';
import ThankYouPractitioner from './pages/general-practitioner/ThankYou';
import ThankYouNutritionist from './pages/nutritionist-in-bangalore/ThankYou';
import ThankYouCardiologist from './pages/cardiologist-in-bangalore/ThankYou';
import ThankYouOrthopaedic from './pages/orthopaedic-specialist/ThankYou';


const App = () => {
  const basename = import.meta.env.DEV ? "/" : "/landing";

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<MentalWellnessPage />} />
        <Route path="/mental-wellness-services" element={<MentalWellnessPage />} />
        <Route path="/family-doctor-services" element={<FamilyDoctorServicesPage />} />
        <Route path="/obstetrics-and-gynaecology-care" element={<GynaecologyPage />} />
        <Route path="/dermatology-services" element={<DermatologyServicesPage />} />
        <Route path="/therapy-and-counselling-services" element={<TherapyServicesPage />} />
        <Route path="/paediatric-care-evolution" element={<PaediatricServicesPage />} />
        {/* <Route path="/general-practitioner" element={<GeneralPractitionerServicesPage />} />
        <Route path="/nutritionist-in-bangalore" element={<NutritionistServicesPage />} />
        <Route path="/cardiologist-in-bangalore" element={<CardiologistServicesPage />} />
        <Route path="/orthopaedic-specialist" element={<OrthopaedicSpecialistServicesPage />} /> */}

        <Route path="/mental-wellness-services/thank-you" element={<ThankYouMentalWellness />} />
        <Route path="/obstetrics-and-gynaecology-care/thank-you" element={<ThankYouGynaecology />} />
        <Route path="/family-doctor-services/thank-you" element={<ThankYouFamily />} />
        <Route path="/dermatology-services/thank-you" element={<ThankYouDermatology />} />
        <Route path="/therapy-and-counselling-services/thank-you" element={<ThankYouTherapy />} />
        <Route path="/paediatric-care-evolution/thank-you" element={<ThankYouPaediatric />} />
        {/* <Route path="/general-practitioner/thank-you" element={<ThankYouPractitioner />} />
        <Route path="/nutritionist-in-bangalore/thank-you" element={<ThankYouNutritionist />} />
        <Route path="/cardiologist-in-bangalore/thank-you" element={<ThankYouCardiologist />} />
        <Route path="/orthopaedic-specialist/thank-you" element={<ThankYouOrthopaedic />} /> */}
        
      </Routes>
    </Router>
  );
};

export default App;