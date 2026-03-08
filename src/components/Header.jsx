import React from 'react';

const Header = () => {
    return (
        <header className="wt-header-height">
            <div id="header-sticky" className="wt-header-area wt-header-transparent">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="wt-header-wrapper">

                                {/* logo */}
                                <div className="wt-header-logo">
                                    <a href="#"><img src="/assets/img/logo/AM_white2.png" alt="Logo" /></a>
                                </div>

                                {/* menu */}
                                <div className="wt-header-main-menu d-none d-lg-block">
                                    <nav className="wt-main-menu-content">
                                        <ul className="wt-onepage-menu">
                                            <li><a href="#resume-one-page">resume</a></li>
                                            <li><a href="#skills-one-page">skills</a></li>
                                            <li><a href="#project-one-page">project</a></li>
                                            {/* <li><a href="#blog-one-page">Blog</a></li> */}
                                        </ul>
                                    </nav>
                                </div>

                                {/* Header Button */}
                                <div className="wt-header-buton icon_main d-none d-lg-block">
                                    <a className="wt-header-btn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abhinav-mukwane/">LinkedIn
                                        <span className="icon_box">
                                            <i className="icon_first fa-regular fa-arrow-right"></i>
                                            <i className="icon_second fa-regular fa-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>

                                {/* Header Site-Bar Button */}
                                <div className="wt-header-3-toggle d-lg-none">
                                    <button className="wt-menu-bar"><img src="/assets/img/icon/menu.svg" alt="" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
