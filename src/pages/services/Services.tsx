import ServicesGrid from "../../components/ServicesGrid/ServicesGrid";
import Footer from "../../components/footer/Footer";
import HeroCard from "../../components/heroCard/HeroCard";
import HeroSectionCentered from "../../components/heroSectionCentered/HeroSectionCentered";
import Navbar from "../../components/navbar/NavBar";
import heroSectionCardsData from "../../data/heroSectionData";
import { servicesBackgroundImages } from "../../data/servicesData";
const Services = () => {
  return (
    <>
      <Navbar />
      <HeroSectionCentered data={servicesBackgroundImages} />
      <ServicesGrid />
      <Footer />
    </>
  );
};

export default Services;
