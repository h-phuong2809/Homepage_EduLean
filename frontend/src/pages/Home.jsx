import AnimatedPage from "../components/AnimatedPage";
import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourse";
import ExerciseSection from "../components/ExerciseSection";

export default function Home() {
  return (
    <AnimatedPage>
      <Hero />
      <FeaturedCourses />
      <ExerciseSection />
    </AnimatedPage>
  );
}
