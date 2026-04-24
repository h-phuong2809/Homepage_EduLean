export default function HeroProduct() {
    return (
        <section className="hero">
            <div className="hero-product__inner">

                <h1 className="hero-product__title">
                    Comprehensive Education{' '}<br />
                    <span>Solution</span>
                </h1>

                <p className="hero-product__desc">
                    EduLearn provides a modern learning ecosystem, helping students optimize
                    their progress and supporting instructors in creating breakthrough lectures.
                </p>

                <div className="hero-product__button">
                    <a href="#students" className="btn-primary">
                        Explore for Students
                    </a>
                    <a href="#instructors" className="btn-secondary">
                        Solution for Instructors
                    </a>
                </div>

            </div>
        </section>
    );
}