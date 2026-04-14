import AnimatedPage from "../components/AnimatedPage";
import HeroProduct from "../components/HeroProduct";
import ForStudent from "../components/ForStudent";
import ForTeacher from "../components/ForTeacher";
import CTAProduct from "../components/CTAProduct";

export default function Product() {
  return (
    <AnimatedPage>
      <HeroProduct />
      <ForStudent />
      <ForTeacher />
      <CTAProduct />
    </AnimatedPage>
  );
}
