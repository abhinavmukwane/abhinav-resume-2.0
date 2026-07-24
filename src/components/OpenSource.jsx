import React from 'react';

const features = [
    { title: 'AES-256-GCM', desc: 'Fast authenticated symmetric encryption.' },
    { title: 'RSA-2048 OAEP', desc: 'Secure asymmetric key exchange.' },
    { title: 'SHA-256 Signature', desc: 'Digital signing for message integrity.' },
];

const OpenSource = () => {
    return (
        <section id="opensource-one-page" className="am-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="am-section-head wt_fade_anim" data-delay=".2">
                            <span className="am-eyebrow">Open source</span>
                            <h2 className="wt-section-title wt-char-animation">published <br /> packages</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="am-oss-card wt_fade_anim" data-delay=".3">
                            <span className="am-oss-badge">
                                <i className="fa-brands fa-microsoft"></i> NuGet Package
                            </span>
                            <h3 className="am-oss-title">FintechEncryption</h3>
                            <p className="am-oss-desc">
                                A lightweight .NET library providing hybrid cryptography for secure fintech
                                applications and APIs. It combines symmetric speed with asymmetric key
                                exchange — the same approach used in banking systems, payment gateways and
                                fintech APIs.
                            </p>

                            <div className="am-oss-features">
                                {features.map((f) => (
                                    <div className="am-oss-feature" key={f.title}>
                                        <h6>{f.title}</h6>
                                        <p>{f.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="am-code">
                                <span className="am-code-prompt">$</span>
                                <span>dotnet add package FintechEncryption</span>
                            </div>

                            <div className="am-btn-row">
                                <a
                                    className="am-btn"
                                    href="https://www.nuget.org/packages/FintechEncryption"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-light fa-box-open"></i> View on NuGet
                                </a>
                                <a
                                    className="am-btn am-btn-ghost"
                                    href="https://github.com/abhinavmukwane/FinTechEncryption"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-github"></i> Source on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpenSource;
