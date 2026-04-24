import anhnhom from "../assets/anhnhom.png";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__inner">
                {/* Left Column: Content */}
                <div className="hero__content">
                    <h1 className="hero__title">
                        Learn Anything, <span>Anywhere</span>
                    </h1>
                    <p className="hero__desc">
                        Access world-class education from the comfort of your home. Join over 10 million students learning new skills from expert instructors.
                    </p>

                    <div>
                        <div className="search-box">
                            <div className="search-icon">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="search-input"
                                placeholder="What do you want to learn today?"
                                type="text"
                            />
                            <button className="search-btn">
                                Search
                            </button>
                        </div>
                        <div className="popular-tags">
                            <span>Popular:</span>
                            <a href="#">Python</a>
                            <a href="#">UX Design</a>
                            <a href="#">React</a>
                            <a href="#">Business</a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="hero__image-wrapper">
                    <div className="hero__image-box">
                        <div
                            className="hero__image-img"
                            style={{ backgroundImage: `url(${anhnhom})` }}
                        ></div>
                        <div className="hero__stats">
                            <div className="hero__stats-icon">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div className="hero__stats-text">
                                <p>1,200+ Courses</p>
                                <p>High quality content</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}