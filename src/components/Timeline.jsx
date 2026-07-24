import React from 'react';

// Newest first. `muted` marks non-role entries (education / break) so they read
// as context rather than competing with the job entries.
const timeline = [
    {
        date: 'Aug 2023 — Present',
        title: 'Software Developer',
        org: 'Trust Fintech Limited, Nagpur',
        desc: 'Architecting full-stack banking applications (LOS, ONDC Credit, PMEGP) with ASP.NET MVC and Web API, serving 10,000+ loan applications annually. Leading module delivery across a 6-member team.',
    },
    {
        date: 'Mar 2022 — Sep 2022',
        title: 'PG Diploma in Advanced Computing (PG-DAC)',
        org: 'C-DAC, Pune — Full Stack Development Track',
        desc: 'Formal transition into full-stack software engineering.',
        muted: true,
    },
    {
        date: 'Feb 2021 — Feb 2022',
        title: 'Executive Engineer — Software Development',
        org: 'Raychem RPG Pvt. Ltd., Pune',
        desc: 'Built the DrishTi web application for real-time digital monitoring of manufacturing production, with RESTful APIs across SQL, MySQL and MongoDB.',
    },
    {
        date: 'Aug 2019 — Jan 2021',
        title: 'Career Break',
        org: '',
        desc: 'A planned break, extended by the COVID-19 hiring slowdown. Returned to full-time work.',
        muted: true,
    },
    {
        date: 'May 2018 — Jul 2019',
        title: 'Graduate Engineer Trainee',
        org: 'Raychem RPG Pvt. Ltd., Pune',
        desc: 'Production planning, scheduling and reporting through Oracle ERP.',
    },
    {
        date: 'Aug 2014 — Jun 2017',
        title: 'B.E. in Electrical Engineering',
        org: 'Rashtrasant Tukadoji Maharaj Nagpur University',
        desc: '',
        muted: true,
    },
];

const Timeline = () => {
    return (
        <section id="journey-one-page" className="am-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="am-section-head wt_fade_anim" data-delay=".2">
                            <span className="am-eyebrow">Career journey</span>
                            <h2 className="wt-section-title wt-char-animation">the road <br /> so far</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-11">
                        <div className="am-timeline wt_fade_anim" data-delay=".3">
                            {timeline.map((item) => (
                                <div
                                    className={`am-tl-item${item.muted ? ' is-muted' : ''}`}
                                    key={item.date}
                                >
                                    <span className="am-tl-date">{item.date}</span>
                                    <h4 className="am-tl-title">{item.title}</h4>
                                    {item.org && <p className="am-tl-org">{item.org}</p>}
                                    {item.desc && <p className="am-tl-desc">{item.desc}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
