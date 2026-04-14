import React from "react";
const NAV_LINKS = [
    { label: "About Us", href: "#", active: true },
    { label: "Products", href: "#", active: false },
    { label: "Guide", href: "#b", active: false },
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

                {/* Login/Register Buttons */}
                <div className="header_login_register">
                    <div className="Login-btn">
                        <button>Login</button>
                    </div>
                    <div className="Register-btn">
                        <button>Register </button>
                    </div>
                </div>
            </div>
        </header>
    );
}