import React from 'react';

const Offcanvas = () => {
    return (
        <>
            <div className="wtoffcanvas-area">
                <div className="wtoffcanvas">
                    <div className="wtoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times"></i></button>
                    </div>
                    <div className="wtoffcanvas__logo">
                        <a href="index.html">
                            <img src="/assets/img/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="wtoffcanvas__title">
                        <p>Abhinav Mukwane</p>
                    </div>
                    <div className="wt-main-menu-mobile d-xl-none"></div>
                    <div className="wtoffcanvas__contact-info">
                        <div className="wtoffcanvas__contact-title">
                            <h5>Contact us</h5>
                        </div>
                        <ul>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <a href="https://www.google.com/maps/@23.8223586,90.3661283,15z" target="_blank" rel="noopener noreferrer">Manchester 21, Zurich, CH</a>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:omioinfo@mail.com"><span>omioinfo@mail.com</span></a>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone-flip"></i>
                                <a href="tel:+48555223224">(+00) 678 345 98568</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wtoffcanvas__input">
                        <div className="wtoffcanvas__input-title">
                            <h4>Get UPdate</h4>
                        </div>
                        <form action="#">
                            <div className="p-relative">
                                <input type="text" placeholder="Enter mail" />
                                <button type="submit">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="wtoffcanvas__social">
                        <div className="social-icon">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay"></div>
        </>
    );
};

export default Offcanvas;
