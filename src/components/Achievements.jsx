import React from 'react';

const highlights = [
    'Explainable 0–1000 Financial Health Score across six weighted dimensions for New-to-Credit and New-to-Bank MSMEs.',
    'ML.NET in-process: LightGBM calibration (60% rules engine + 40% model), SSA cash-flow trend and RandomizedPCA anomaly detection.',
    'Permutation Feature Importance reasons for every score, plus a GST vs ITR vs bank cross-check that flags fraud signals separately.',
    'Consent-based data from Udyam, GST, ITR, Account Aggregator and MCA, with loan-case hand-off to LOS, RBI ULI and ONDC.',
];

const stack = ['ASP.NET Core 8', 'C#', 'ML.NET', 'LightGBM', 'EF Core 8', 'SQL Server', 'Azure Blob Storage', 'Bootstrap 5', 'Chart.js'];

const team = [
    { name: 'Abhinav Mukwane', role: 'Team Leader' },
    { name: 'Sourabh Thakre', role: '' },
    { name: 'Mayur Khangar', role: '' },
];

const Achievements = () => {
    return (
        <section id="achievements-one-page" className="am-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="am-section-head wt_fade_anim" data-delay=".2">
                            <span className="am-eyebrow">Awards &amp; recognition</span>
                            <h2 className="wt-section-title wt-char-animation">hackathon <br /> wins</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="am-award wt_fade_anim" data-delay=".3">
                            <div className="am-award-medal">
                                <i className="fa-solid fa-trophy"></i>
                                <span className="am-award-rank">3<sup>rd</sup></span>
                                <span className="am-award-rank-label">Place Winner</span>
                                <span className="am-award-event">IDBI Innovate 2026</span>
                                <span className="am-award-track">Track 03 · Financial Health Score</span>
                            </div>

                            <div className="am-award-body">
                                <p className="am-award-org">
                                    Organised by IDBI Bank · Powered by Hack2Skill · Knowledge Partner AWS
                                </p>
                                <h3 className="am-award-title">FinRiskLens AI</h3>
                                <p className="am-award-pitch">
                                    A credit score for the 80% of Indian MSMEs that don&apos;t have one — built
                                    from the digital footprint they already produce instead of a bureau history
                                    they never had.
                                </p>

                                <ul className="am-award-list">
                                    {highlights.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>

                                <div className="am-chips">
                                    {stack.map((s) => (
                                        <span className="am-chip" key={s}>{s}</span>
                                    ))}
                                </div>

                                <div className="am-award-team">
                                    <span className="am-award-team-label">Team ASM FinTech Developer</span>
                                    <div className="am-award-team-members">
                                        {team.map((m) => (
                                            <span className="am-member" key={m.name}>
                                                {m.name}
                                                {m.role && <em> · {m.role}</em>}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="am-btn-row">
                                    <a className="am-btn" href="https://finrisklensai.com/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-regular fa-arrow-up-right"></i> Live App
                                    </a>
                                    <a className="am-btn am-btn-ghost" href="https://video.finrisklensai.com/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-regular fa-circle-play"></i> Demo Video
                                    </a>
                                    <a className="am-btn am-btn-ghost" href="https://hack2skill.com/event/idbinnovate" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-regular fa-calendar-star"></i> Event Page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
