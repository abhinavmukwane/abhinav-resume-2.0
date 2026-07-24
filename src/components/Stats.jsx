import React from 'react';

// Figures sourced from the resume. `data-purecounter-end` must be an integer —
// the suffix (+, %, K+) is rendered separately.
const stats = [
    { end: 4, suffix: '+', label: 'Years of Experience' },
    { end: 10, suffix: 'K+', label: 'Loan Applications Served Annually' },
    { end: 60, suffix: '%', label: 'Faster Loan Processing Delivered' },
    { end: 6, suffix: '', label: 'Member Dev Team Led' },
];

const Stats = () => {
    return (
        <section id="stats-one-page" className="am-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="am-section-head wt_fade_anim" data-delay=".2">
                            <span className="am-eyebrow">By the numbers</span>
                            <h2 className="wt-section-title wt-char-animation">impact <br /> at a glance</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="am-stats-grid wt_fade_anim" data-delay=".3">
                            {stats.map((s) => (
                                <div className="am-stat" key={s.label}>
                                    <h3 className="am-stat-num">
                                        {/* Seeded with the final value: PureCounter's IntersectionObserver
                                            doesn't fire reliably under GSAP ScrollSmoother, and an empty
                                            span has zero width so it can never reach the 0.5 threshold.
                                            This way the number is always correct, animated or not. */}
                                        <span
                                            className="purecounter"
                                            data-purecounter-duration="3"
                                            data-purecounter-end={s.end}
                                        >{s.end}</span>
                                        <span className="am-suffix">{s.suffix}</span>
                                    </h3>
                                    <p className="am-stat-label">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
