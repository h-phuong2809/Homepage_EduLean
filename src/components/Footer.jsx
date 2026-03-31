export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__grid">
                    <div className="footer__col-1">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">
                                <img src="/LMSicon.png" alt="LMSicon Logo" style={{ width: "24px", height: "24px" }} />
                            </div>
                            <h2 className="footer__title">EduLearn</h2>
                        </div>
                        <p className="footer__desc">
                            Empowering learners worldwide through accessible, high-quality online education.
                        </p>
                        <div className="footer__socials">
                            <a href="#" className="social-btn"><span className="material-symbols-outlined">public</span></a>
                            <a href="#" className="social-btn"><span className="material-symbols-outlined">share</span></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer__heading">Explore</h4>
                        <ul className="footer__links">
                            <li><a href="#" className="footer__link">All Courses</a></li>
                            <li><a href="#" className="footer__link">Find Mentors</a></li>
                            <li><a href="#" className="footer__link">Upcoming Webinars</a></li>
                            <li><a href="#" className="footer__link">Community Forum</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer__heading">Support</h4>
                        <ul className="footer__links">
                            <li><a href="#" className="footer__link">Help Center</a></li>
                            <li><a href="#" className="footer__link">Contact Us</a></li>
                            <li><a href="#" className="footer__link">FAQ</a></li>
                            <li><a href="#" className="footer__link">Feedback</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer__heading">Subscribe</h4>
                        <p className="footer__desc" style={{ marginBottom: "16px" }}>Stay updated with our latest course releases and educational news.</p>
                        <form className="footer__form" onSubmit={e => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className="footer__input" />
                            <button className="footer__submit">Subscribe Now</button>
                        </form>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">© {new Date().getFullYear()} EduLearn Inc. All rights reserved.</p>
                    <div className="footer__legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}