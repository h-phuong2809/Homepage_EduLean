import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourse";
import ExerciseSection from "./components/ExerciseSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedCourses />
        <ExerciseSection />
      </main>
      <Footer />
    </div>
  );
}