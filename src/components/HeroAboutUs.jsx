export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__inner">
                {/* Left Column: Content */}
                <div className="hero__content">
                    <h1 className="hero__title">
                        Advancing Vietnam’s <span>Knowledge</span> Economy
                    </h1>
                    <p className="hero__desc">
                        EduLearn is dedicated to empowering learners and teachers
                        through a flexible, high-quality digital environment. We bridge the
                        gap between knowledge and ambition, making world-class
                        education accessible to everyone.
                    </p>

                    <div className="hero__button">
                        <button className="btn-primary">Get Started</button>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="hero__image-wrapper">
                    <div className="hero__image-box">
                        <div
                            className="hero__image-img"
                            style={{ backgroundImage: `url(https://res.cloudinary.com/drjgjihjh/image/upload/q_auto/f_auto/v1775215503/Aboutus_pvuxks.jpg)` }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}