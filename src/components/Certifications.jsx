import React from 'react';

const certs = [
    {
        icon: 'fa-brands fa-microsoft',
        title: 'Microsoft Certified: Azure Developer Associate',
        issuer: 'Microsoft · 2026 · Exam AZ-204',
        credential: '3EEA1393629906FD',
    },
    {
        icon: 'fa-light fa-graduation-cap',
        title: 'PG Diploma in Advanced Computing (PG-DAC)',
        issuer: 'C-DAC, Pune · 2022 · Full Stack Development Track',
        credential: '',
    },
];

const Certifications = () => {
    return (
        <section id="certifications-one-page" className="am-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="am-section-head wt_fade_anim" data-delay=".2">
                            <span className="am-eyebrow">Credentials</span>
                            <h2 className="wt-section-title wt-char-animation">certifications</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="am-cert-grid wt_fade_anim" data-delay=".3">
                            {certs.map((c) => (
                                <div className="am-cert" key={c.title}>
                                    <div className="am-cert-icon">
                                        <i className={c.icon}></i>
                                    </div>
                                    <div className="am-cert-body">
                                        <h4 className="am-cert-title">{c.title}</h4>
                                        <p className="am-cert-issuer">{c.issuer}</p>
                                        {c.credential && (
                                            <p className="am-cert-id">Credential ID: {c.credential}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
