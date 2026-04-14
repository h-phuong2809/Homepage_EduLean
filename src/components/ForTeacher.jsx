const STEPS = [
    {
        num: 1,
        title: 'Professional Course Creation',
        desc: '3-step course building process: Content drafting, lecture design, and publishing.',
    },
    {
        num: 2,
        title: 'Effective Student Management',
        desc: 'Analytics system tracks scores, attendance, and student interaction levels.',
    },
    {
        num: 3,
        title: 'Build Community through Blog',
        desc: 'Share more knowledge and build your personal brand through the integrated blog platform.',
    },
];

const DASHBOARD_IMG =
    'https://res.cloudinary.com/drjgjihjh/image/upload/q_auto/f_auto/v1775267749/unnamed_dd3vlc.png';

export default function ForTeacher() {
    return (
        <section className="for-teacher" id="instructors">
            <div className="for-teacher__inner">

                {/* Left: content */}
                <div className="for-teacher__content">
                    <span className="for-teacher__eyebrow">For Instructors</span>
                    <h2 className="for-teacher__title">Powerful Lecture Management Tools</h2>
                    <p className="for-teacher__lead">
                        We provide all the necessary tools for you to focus on delivering the best knowledge.
                    </p>

                    <div className="for-teacher__steps">
                        {STEPS.map(({ num, title, desc }) => (
                            <div key={num} className="for-teacher__step">
                                <div className="for-teacher__step-num">{num}</div>
                                <div>
                                    <h4 className="for-teacher__step-title">{title}</h4>
                                    <p className="for-teacher__step-desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: image */}
                <div className="for-teacher__visual">
                    <div className="for-teacher__img-wrap">
                        <img src={DASHBOARD_IMG} alt="Instructor Dashboard" className="for-teacher__img" />
                    </div>
                    <div className="for-teacher__decor" aria-hidden="true" />
                </div>

            </div>
        </section>
    );
}