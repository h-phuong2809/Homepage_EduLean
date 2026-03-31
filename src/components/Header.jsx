import userAvatar from "../assets/user.png";

const NAV_LINKS = [
    { label: "Home", href: "#", active: true },
    { label: "My Courses", href: "#my", active: false },
    { label: "Blog", href: "#blog", active: false },
    { label: "Exercise", href: "#exercise", active: false },
];

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                {/* Logo */}
                <div className="header__logo">
                    <div className="header__logo-icon">
                        <img src="/LMSicon.png" alt="LMSicon Logo" style={{ width: "28px", height: "28px" }} />
                    </div>
                    <h2 className="header__title">EduLearn</h2>
                </div>

                {/* Navigation */}
                <nav className="header__nav">
                    {NAV_LINKS.map((link) => (
                        <a key={link.label} href={link.href} className="header__nav-link">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Profile */}
                <div className="header__profile">
                    <div className="profile-btn">
                        <div className="profile-avatar">
                            <img src={userAvatar} alt="Alex's profile picture" />
                        </div>
                        <span className="profile-name">Alex</span>
                        <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "#94a3b8" }}>expand_more</span>
                    </div>
                </div>
            </div>
        </header>
    );
}