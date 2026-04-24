const EXERCISE_CARDS = [
    {
        icon: "code",
        title: "Coding Exercises",
        desc: "Real-time code execution for 15+ languages.",
        cta: "Try Python",
    },
    {
        icon: "quiz",
        title: "Quiz Exercises",
        desc: "Adaptive quizzes to pinpoint your knowledge gaps.",
        cta: "Take a Quiz",
    },
];

export default function ExerciseSection() {
    return (
        <section id="exercise" className="exercise-section">
            <div className="exercise-section__box">

                <div className="exercise-section__blob-tr" />
                <div className="exercise-section__blob-bl" />

                <div className="exercise-section__grid">

                    {/* Left */}
                    <div>
                        <div className="exercise-section__badge">
                            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>bolt</span>
                            Practice Mode
                        </div>
                        <h2 className="exercise-section__title">
                            Master skills with hands-on exercises
                        </h2>
                        <p className="exercise-section__desc">
                            Theory is good, but practice is better. Test your knowledge with
                            our built-in interactive platform.
                        </p>
                        <div className="exercise-section__btns">
                            <button className="exercise-section__btn-primary">Start Practicing</button>
                            <button className="exercise-section__btn-ghost">Learn More</button>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="exercise-cards-grid">
                        {EXERCISE_CARDS.map((card) => (
                            <div key={card.title} className="exercise-card">
                                <div className="exercise-card__icon-wrap">
                                    <span className="material-symbols-outlined">{card.icon}</span>
                                </div>
                                <h3 className="exercise-card__title">{card.title}</h3>
                                <p className="exercise-card__desc">{card.desc}</p>
                                <div className="exercise-card__cta">
                                    {card.cta}
                                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_outward</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}