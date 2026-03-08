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
                            <img src="/assets/img/logo/AM_white2.png" alt="logo" />
                        </a>
                    </div>
                    <div className="wtoffcanvas__title">
                        <p>Abhinav Mukwane</p>
                    </div>
                    <div className="wt-main-menu-mobile d-xl-none"></div>
                    <div className="wtoffcanvas__contact-info">
                        <div className="wtoffcanvas__contact-title">
                            <h5>Connect</h5>
                        </div>
                        <ul>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <a href="https://www.google.com/maps/place/Nagpur,+Maharashtra/" target="_blank" rel="noopener noreferrer">Nagpur, Maharashtra, IN</a>
                            </li>
                            {/* <li>
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:a@mail.com"><span>a@mail.com</span></a>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone-flip"></i>
                                <a href="tel:+91 1234567890"> +91 1234567890</a>
                            </li> */}
                        </ul>
                    </div>
                    {/* <div className="wtoffcanvas__input">
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
                    </div> */}
                    <div className="wtoffcanvas__social">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/abhinav-mukwane/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/abhinavmukwane" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay"></div>
        </>
    );
};

export default Offcanvas;
