import React from 'react';

const Footer = () => {
    return (
        <footer className="wt-footer-2-area fix">
            <div className="wt-footer-2-top">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="wt-brand-2-slider">
                                <div className="wt-brand-2-active swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="wt-brand-2-item swiper-slide">
                                            <div className="wt-brand-2-thumb">
                                                <img src="/assets/img/logo/AM_white2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="wt-brand-2-item swiper-slide">
                                            <div className="wt-brand-2-thumb">
                                                <img src="/assets/img/logo/AM_white2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="wt-brand-2-item swiper-slide">
                                            <div className="wt-brand-2-thumb">
                                                <img src="/assets/img/logo/AM_white2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="wt-brand-2-item swiper-slide">
                                            <div className="wt-brand-2-thumb">
                                                <img src="/assets/img/logo/AM_white2.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wt-footer-2-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="wt-footer-2-title">
                                <div className="wt-section-wrapper mb-70 wt_fade_anim">
                                    <h2 className="wt-section-title wt-char-animation">connect</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2">
                            <div className="wt-footer-2-social wt-footer-right-social d-none d-sm-block">
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/abhinav-mukwane/" target="_blank" rel="noopener noreferrer">
                                            <span className="active-media">LinkedIn</span>
                                            <span className="hover-media"><i className="fa-brands fa-linkedin-in"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/abhinavmukwane" target="_blank" rel="noopener noreferrer">
                                            <span className="active-media">GitHub</span>
                                            <span className="hover-media"><i className="fa-brands fa-github"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-2 col-lg-2 col-md-2">
                            <div className="wt-footer-2-widget-menu d-none d-md-block">
                                <div className="wt-header-menu">
                                    <ul>
                                        <li>
                                            <a href="#"><img src="/assets/img/icon/menu.svg" alt="" /> menu</a>
                                            <ul className="submenu">
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="service.html">Services</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="wt-footer-2-widget-mail wt-footer-widget-mail">
                                <h6>Connect with me</h6>
                                <a href="https://www.linkedin.com/in/abhinav-mukwane/">Abhinav Mukwane</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wt-footer-2-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="wt-about-bottom-content text-center">
                                <h2 className="wt-about-title">Abhinav Mukwane</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="wt-footer-copyright text-center">
                                <p className="wt-footer-copyright-pagaraph">Copyright © 2026 <a href="#">Abhi9M</a>. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wt-footer-2-shape">
                <img className="wt-footer-2-shape-1" src="/assets/img/service/service-2-thumb.png" alt="" />
            </div>
        </footer>
    );
};

export default Footer;
