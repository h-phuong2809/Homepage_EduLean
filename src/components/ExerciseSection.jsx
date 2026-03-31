export default function ExerciseSection() {
    return (
        <section className="exercise">
            <div className="exercise__inner">
                <div className="exercise__decor"></div>
                <div className="exercise__grid">
                    <div>
                        <h2 className="exercise__title">Master skills with hands-on exercises</h2>
                        <p className="exercise__desc">
                            Theory is good, but practice is better. Test your knowledge with our built-in interactive platform.
                        </p>
                        <div className="exercise__actions">
                            <button className="btn-white">Start Practicing</button>
                            <button className="btn-outline">Learn More</button>
                        </div>
                    </div>
                    <div className="exercise__cards">
                        <div className="ex-card">
                            <div className="ex-card__icon">
                                <span className="material-symbols-outlined">code</span>
                            </div>
                            <h3 className="ex-card__title">Coding Exercises</h3>
                            <p className="ex-card__desc">Real-time code execution for 15+ languages.</p>
                            <a href="#" className="ex-card__link" style={{ color: "white" }}>
                                Try Python <span className="material-symbols-outlined" style={{ fontSize: "14px", marginLeft: "4px" }}>arrow_outward</span>
                            </a>
                        </div>
                        <div className="ex-card">
                            <div className="ex-card__icon">
                                <span className="material-symbols-outlined">quiz</span>
                            </div>
                            <h3 className="ex-card__title">Quiz Exercises</h3>
                            <p className="ex-card__desc">Adaptive quizzes to pinpoint your knowledge gaps.</p>
                            <a href="#" className="ex-card__link" style={{ color: "white" }}>
                                Take a Quiz <span className="material-symbols-outlined" style={{ fontSize: "14px", marginLeft: "4px" }}>arrow_outward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
