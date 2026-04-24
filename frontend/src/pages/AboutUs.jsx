import AnimatedPage from "../components/AnimatedPage";
import HeroAboutUs from "../components/HeroAboutUs";
import KeyStats from "../components/KeyStats";
import ContentAboutUs from "../components/ContentAboutUs";
import MissionAndVision from "../components/MissionAndVision";
import OurCoreValue from "../components/OurCoreValue";

export default function AboutUs() {
  return (
    <AnimatedPage>
      <HeroAboutUs />
      <KeyStats />
      <ContentAboutUs />
      <MissionAndVision />
      <OurCoreValue />
    </AnimatedPage>
  );
}
