import CourseCard from "./CourseCard";
import course1 from "../assets/course/Course1.png";
import course2 from "../assets/course/course2.png";
import course3 from "../assets/course/course3.png";
import course4 from "../assets/course/course4.png";

const COURSES = [
    {
        id: 1,
        title: "Complete Python Bootcamp",
        instructor: "Dr. Angela Yu",
        rating: "4.9", reviews: "45k reviews", price: "$89.99", badge: "Bestseller",
        image: course1,
    },
    {
        id: 2,
        title: "UI/UX Design Masterclass",
        instructor: "James Clear",
        rating: "4.8", reviews: "12k reviews", price: "$7.99", badge: null,
        image: course2,
    },
    {
        id: 3,
        title: "Digital Marketing 101",
        instructor: "Sarah Jenkins",
        rating: "4.7", reviews: "8k reviews", price: "$59.99", badge: null,
        image: course3,
    },
    {
        id: 4,
        title: "Data Science Foundations",
        instructor: "Michael Chen",
        rating: "4.9", reviews: "15k reviews", price: "$99.99", badge: "New",
        image: course4,
    },
];

export default function FeaturedCourses() {
    return (
        <section id="courses" className="courses">
            <div className="courses__inner">

                <div className="courses__header">
                    <div>
                        <h2 className="courses__title">Featured Courses</h2>
                        <p className="courses__sub">Hand-picked selections to start your journey</p>
                    </div>
                    <a href="#" className="courses__view-all">
                        View All
                        <span className="material-symbols-outlined" style={{ fontSize: "16px", marginLeft: "4px" }}>arrow_forward</span>
                    </a>
                </div>

                <div className="courses__grid">
                    {COURSES.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

            </div>
        </section>
    );
}