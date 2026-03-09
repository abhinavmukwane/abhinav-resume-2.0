import React from 'react';

const Resume = () => {
    return (
        <section id="resume-one-page" className="wt-resume-2-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-8 mb-200">
                        <div>
                            <div className="wt-section-wrapper wt_fade_anim">
                                <h2 className="wt-section-title wt-char-animation">let's Explore my resume</h2>
                            </div>
                        </div>
                        <div className="wt_fade_anim" data-delay=".4">
                            <h4 style={{ marginBottom: '15px' }}>✨ Software Developer | AI & Cloud Enthusiast | Full-Stack Engineer</h4>
                            <h5 style={{ marginBottom: '20px', color: '#555' }}>🚀 Building Scalable, Secure & AI-Driven Solutions</h5>

                            <p className="wt-section-paragraph wt-section-2-paragraph" style={{ textAlign: 'justify' }}>
                                I am a passionate Software Developer at Trust Fintech Limited, specializing in banking domain applications like Loan Origination Systems (LOS), ONDC Credit Applications and PMEGP (Government Loan Project). With expertise in full-stack development, I create high-performance, secure, and scalable applications that enhance user experiences and streamline business operations.
                            </p>

                            <div style={{ marginBottom: '20px' }}>
                                <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>🔹 Tech Stack &amp; Expertise:</h5>
                                <ul style={{ listStyleType: 'none', paddingLeft: 0 }} className="wt-section-paragraph wt-section-2-paragraph">
                                    <li><strong>💻 Backend:</strong> ASP.NET MVC, ASP.NET Web API, .NET Core, C#, Node.js</li>
                                    <li><strong>🎨 Frontend:</strong> React.js, JavaScript, jQuery, AJAX, HTML, CSS, Bootstrap</li>
                                    <li><strong>📊 Databases:</strong> MS SQL, MySQL, LINQ, Entity Framework</li>
                                    <li><strong>☁️ Cloud &amp; Deployment:</strong> Microsoft Azure, Docker, IIS</li>
                                    <li><strong>🤖 AI &amp; Automation:</strong> ChatGPT, Claude, Perplexity, Cursor and Postman AI</li>
                                    <li><strong>🛠 Version Control:</strong> Git, GitHub, Visual SourceSafe</li>
                                </ul>
                            </div>

                            <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>🤖 AI in Software Development</h5>
                            <p className="wt-section-paragraph wt-section-2-paragraph" style={{ textAlign: 'justify' }}>
                                I actively integrate AI-driven solutions to enhance automation, optimize workflows, and improve decision-making. From machine learning models to intelligent automation, I focus on leveraging AI to build smart, future-ready applications.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        {/* Experience Section */}
                        <div className="wt-resume-2-wrapper wt_fade_anim mb-50" data-delay=".3">
                            <div className="wt-resume-2-tab-button mb-50">
                                <ul className="wt-resume-2-tab-nav-tabs nav nav-tabs" id="experienceTab" role="tablist">
                                    <li className="wt-resume-2-tab-nav-item nav-item" role="presentation">
                                        <button className="wt-resume-2-tab-nav-link nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Experience</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="wt-resume-2-tab-body">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="wt-resume-2-tab-wrap">
                                            <div className="wt-resume-2-tab-item">
                                                <div className="wt-resume-2-tab-date">
                                                    <span><i className="fa-light fa-calendar-days"></i> Aug 2023 to Present</span>
                                                </div>
                                                <div className="wt-resume-2-tab-content">
                                                    <h4 className="wt-resume-2-tab-title">Software Developer</h4>
                                                    <h6 className="wt-resume-2-tab-subtitle">Trust Fintech Limited, Nagpur</h6>
                                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }} className="wt-section-paragraph wt-section-2-paragraph">
                                                        <li>Developed and maintained Fintech full-stack web applications using ASP.Net MVC and Web API in the Banking Domain Web Applications, focusing on Loan Origination Systems (LOS) and ONDC Credit Applications.</li>
                                                        <li>Implemented AI-driven automation for credit risk assessment, customer verification, and document processing using OpenAI and Azure Cognitive Services.</li>
                                                        <li>Designed scalable application architecture and developed projects from scratch, covering database design, API structure, security, and deployment.</li>
                                                        <li>Strong command over Entity Framework, JavaScript, jQuery, AJAX, JSON, and LINQ, facilitating dynamic and interactive user experiences and efficient data handling.</li>
                                                        <li>Experience in Working on MS SQL and MySQL databases.</li>
                                                        <li>Creating Stored Procedure (Proc.), functions and View (Virtual Table) in MS SQL and MySQL databases.</li>
                                                        <li>Experience in creating front-end of applications through appealing visual design using HTML, CSS, JavaScript, jQuery, Bootstrap and React.js.</li>
                                                        <li>Deployed and maintained ASP.NET web applications on IIS (Internet Information Services) and Azure Cloud.</li>
                                                        <li>Experience in solving vulnerability issues of ASP.NET MVC and WEB API web application.</li>
                                                        <li>Proficient in version control systems including Git, GitHub, and Visual SourceSafe (VSS), ensuring efficient collaboration and code management throughout the development lifecycle.</li>
                                                        <li>Explored and implemented AI-assisted development tools (ChatGPT, Claude, Perplexity and Cursor) to accelerate code generation, debugging, and documentation.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wt-resume-2-tab-item">
                                                <div className="wt-resume-2-tab-date">
                                                    <span><i className="fa-light fa-calendar-days"></i>Feb 2021 to Feb 2022</span>
                                                </div>
                                                <div className="wt-resume-2-tab-content">
                                                    <h4 className="wt-resume-2-tab-title">Executive Engineer</h4>
                                                    <h6 className="wt-resume-2-tab-subtitle">Raychem RPG Pvt. Ltd., Pune</h6>
                                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }} className="wt-section-paragraph wt-section-2-paragraph">
                                                        <li>Work with development teams and product managers to ideate software solutions for DrishTi web Application for digital monitoring of production.</li>
                                                        <li>Developing and maintaining web-based applications and Web API.</li>
                                                        <li>Worked with SQL, MySQL, and MongoDB, ensuring seamless data flow between databases and web applications.</li>
                                                        <li>Experience in creating front-end of applications using HTML, CSS, JS, Bootstrap and React.js.</li>
                                                        <li>Sound knowledge on Object-Oriented Programming Concepts.</li>
                                                        <li>Created reports and dashboards using Oracle ERP to analyze procurement performance, inventory levels, and material usage, providing insights for decision-making.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wt-resume-2-tab-item">
                                                <div className="wt-resume-2-tab-date">
                                                    <span><i className="fa-light fa-calendar-days"></i>May 2018 to Jun 2019</span>
                                                </div>
                                                <div className="wt-resume-2-tab-content">
                                                    <h4 className="wt-resume-2-tab-title">Graduate Engineer Trainee</h4>
                                                    <h6 className="wt-resume-2-tab-subtitle">Raychem RPG Pvt. Ltd., Pune</h6>
                                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }} className="wt-section-paragraph wt-section-2-paragraph">
                                                        <li>Using Oracle ERP for production planning, scheduling, and reporting functions, including generating work orders and tracking production progress.</li>
                                                        <li>Utilized Microsoft Excel to create and maintain production reports, including production schedules, inventory levels, and capacity utilization.</li>
                                                        <li>Assisted in the planning and scheduling of production activities based on demand forecasts, capacity constraints, and inventory levels.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="wt-resume-2-wrapper wt_fade_anim mt-50" style={{ marginTop: '0px', paddingTop: '50px' }} data-delay=".6">
                            <div className="wt-resume-2-tab-button mb-50">
                                <ul className="wt-resume-2-tab-nav-tabs nav nav-tabs" id="educationTab" role="tablist">
                                    <li className="wt-resume-2-tab-nav-item nav-item" role="presentation">
                                        <button className="wt-resume-2-tab-nav-link nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Education</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="wt-resume-2-tab-body">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="wt-resume-2-tab-wrap">
                                            <div className="wt-resume-2-tab-item">
                                                <div className="wt-resume-2-tab-date">
                                                    <span><i className="fa-light fa-calendar-days"></i>Mar 2022 to Sep 2022</span>
                                                </div>
                                                <div className="wt-resume-2-tab-content">
                                                    <h4 className="wt-resume-2-tab-title">Post Graduate Diploma in Advanced Computing (PG-DAC)</h4>
                                                    <h6 className="wt-resume-2-tab-subtitle">From Centre for Development of Advanced Computing (C-DAC), Pune</h6>
                                                    <p className="wt-resume-2-tab-paragraph">First class (A)</p>
                                                </div>
                                            </div>
                                            <div className="wt-resume-2-tab-item">
                                                <div className="wt-resume-2-tab-date">
                                                    <span><i className="fa-light fa-calendar-days"></i>Aug 2014 to Jun 2017</span>
                                                </div>
                                                <div className="wt-resume-2-tab-content">
                                                    <h4 className="wt-resume-2-tab-title">Bachelor in Electrical Engineering</h4>
                                                    <h6 className="wt-resume-2-tab-subtitle">From Abha Gaikwad-Patil College of Engineering, Nagpur</h6>
                                                    <h6 className="wt-resume-2-tab-subtitle">Under Rashtrasanth Tukdoji Maharaj Nagpur University</h6>
                                                    <p className="wt-resume-2-tab-paragraph">First class</p>
                                                </div>
                                            </div>
                                            <div className="wt-resume-2-tab-item">
                                                <div className="wt-resume-2-tab-date">
                                                    <span><i className="fa-light fa-calendar-days"></i>Aug 2011 to Jun 2014</span>
                                                </div>
                                                <div className="wt-resume-2-tab-content">
                                                    <h4 className="wt-resume-2-tab-title">Diploma in Electrical Engineering</h4>
                                                    <h6 className="wt-resume-2-tab-subtitle">From Dharampeth Polytechnic, Nagpur</h6>
                                                    <h6 className="wt-resume-2-tab-subtitle">Under Maharashtra State Board of Technical Education, Mumbai</h6>
                                                    <p className="wt-resume-2-tab-paragraph">First class</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
