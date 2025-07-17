import AnimatedCounter from "./components/AnimatedCounter";
import FadeInSection from "./components/FadeInSection";
import SmallSection from "./components/SmallSection";
import TopNavBar from "./components/TopNavBar";
import ContactMe from "./sections/ContactMe";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowcaseSection";
import TecSkills from "./sections/TecSkills";

const App = () => (
  <>
    <TopNavBar />
    <FadeInSection><Hero /></FadeInSection>
    <FadeInSection><AnimatedCounter /></FadeInSection>
    <FadeInSection><Experience /></FadeInSection>
    <FadeInSection><Education /></FadeInSection>
    <FadeInSection><TecSkills /></FadeInSection>
    <FadeInSection><FeatureCards /></FadeInSection>
    <FadeInSection><AppShowcase/></FadeInSection>
    <FadeInSection><ContactMe /></FadeInSection>
    <FadeInSection><SmallSection/></FadeInSection>
    <FadeInSection><Footer/></FadeInSection>
    
  </>
);

export default App;
