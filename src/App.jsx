import LogoSection from './sections/LogoSection';
import Navbar from './components/Navbar';
import FeatureCards from './sections/FeatureCards';
import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection';
import ExperienceSection from './sections/ExperienceSection';
import TechStack from './sections/TechStack';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
    </>
  );
};

export default App;
