import userAvatar from "../assets/anhdaidien.png";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Product", href: "/product" },
    { label: "Exercise", href: "#exercise" },
];

export default function Header() {
    const location = useLocation();

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
                        <Link 
                            key={link.label} 
                            to={link.href} 
                            className={`header__nav-link ${location.pathname === link.href ? "active" : ""}`}
                        >
                            {link.label}
                        </Link>
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