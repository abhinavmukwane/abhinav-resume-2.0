import React from 'react';

const Hero = () => {
    return (
        <section className="wt-hero-2-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="wt-hero-2-wrapper">
                            <div className="wt-hero-2-left">
                                <div className="wt-hero-2-content">
                                    <h1 className="wt-hero-2-title wt-char-animation">
                                        <a>Hi</a>, I am <br /> <a style={{ color: '#7C02FF' }}>Abhinav Mukwane</a><br />
                                        Fullstack Developer
                                    </h1>
                                </div>
                                <div className="wt-hero-2-wrap">
                                    <div className="wt-hero-2-wrap-thumb wt_fade_anim" data-delay=".3">
                                        <img src="/assets/img/hero/sd.jpg" alt="" />
                                    </div>
                                    <div className="wt-hero-2-wrap-content wt_fade_anim" data-delay=".5">
                                        <p className="wt-hero-2-wrap-paragaraph" style={{ marginBottom: '20px', fontSize: 'clamp(18px, 4vw, 30px)', maxWidth: 'none' }}>
                                            Working @ <a target="_blank" href="https://www.softtrust.com/" style={{ color: '#fd7e14' }} rel="noreferrer">Trust Fintech Limited, Nagpur</a>
                                        </p>
                                        <div className="wt-hero-2-button">
                                            <div className="wt-hover-btn-wrapper">
                                                <a className="wt-btn-circle wt-hover-btn-item wt-hover-btn" target="_blank" href="https://www.linkedin.com/in/abhinav-mukwane" rel="noreferrer">
                                                    <span className="wt-btn-circle-icon">
                                                        <i className="fa-regular fa-arrow-up-right"></i>
                                                    </span>
                                                    <i className="wt-btn-circle-dot"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wt-hero-2-right">
                                <div className="wt-hero-2-thumb wt_fade_anim" data-delay=".4">
                                    <img src="/assets/img/hero/hero-2-thumb.jpg" alt="hero" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
