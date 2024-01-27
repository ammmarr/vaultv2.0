import Footer from "../../components/footer/Footer";
import HeroCard from "../../components/heroCard/HeroCard";
import HeroSectionCentered from "../../components/heroSectionCentered/HeroSectionCentered";
import HeroSectionAboutUs from "../../components/heroSectionCentered/HeroSectionCentered";
import ImagesAndText from "../../components/imagesAndText copy/ImagesAndTextRounded";
import Navbar from "../../components/navbar/NavBar";
import img1 from "../../assets/sliderImg1.jpg";
import img2 from "../../assets/sliderImg2.jpg";
import img3 from "../../assets/sliderImg3.jpg";
import bg from "../../assets/backgroundImages/front view.jfif";

const heroSectionCardsData = [
  {
    bg,
    h1: " WELCOME TO VAULT",
    h2: "Your premier distributor of luxury automotive brands in Egypt!",
  },
];
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <HeroSectionCentered data={heroSectionCardsData} />
      <ImagesAndText />
      <Footer />
    </>
  );
};

export default AboutUs;
