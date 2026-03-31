export default function CourseCard({ course }) {
    return (
        <div className="course-card">
            {/* Image Wrap */}
            <div className="course-card__img-wrap">
                <div 
                    className="course-card__img" 
                    style={{ backgroundImage: `url(${course.image})` }} 
                />
                {course.badge && (
                    <div className="course-card__badge">{course.badge}</div>
                )}
            </div>

            {/* Content */}
            <div className="course-card__content">
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__instructor">{course.instructor}</p>
                
                <div className="course-card__rating">
                    <span className="course-card__stars">
                        {course.rating} 
                        <span className="material-symbols-outlined" style={{ fontSize: "14px", marginLeft: "2px" }}>star</span>
                    </span>
                    <span className="course-card__reviews">({course.reviews})</span>
                </div>

                <div className="course-card__footer">
                    <a href="#" className="course-card__view-more">View More</a>
                </div>
            </div>
        </div>
    );
}