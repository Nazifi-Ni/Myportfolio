<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nazifi Ibrahim - Full Stack Developer</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="loading-overlay">
        <div class="loader"></div>
    </div>

    <header>
        <nav class="container">
            <a href="#" class="logo">NI</a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#mes">Contact</a></li>
            </ul>
            <button class="menu-toggle" id="menuToggle">☰</button>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-bg"></div>
        <div class="particles"></div>
        <div class="hero-content">
            <div class="hero-badge">👋 Available for new opportunities</div>
            <h1>Hi, I'm <span class="gradient-text">Nazifi Ibrahim</span></h1>
            <p> Passionate about Embedded System, Full Stack Developer crafting digital experiences with modern web technologies. leveraging my skills on creating scalable applications, Printed Circuit Boards(PCBs) that make a differences.</p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">View My Works</a>
                <a href="#mes" class="btn btn-secondary">Get In Touch</a>
            </div>
        </div>
    </section>



        <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <div class="section-badge" id="skills">🚀 Technologies</div>
                <h2 class="section-title">Technical Expertise</h2>
                <p class="section-description">I specialize in modern web development technologies, from frontend frameworks to backend systems</p>
            </div>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon"><img src="images.jpg" alt="" width="100%" height="100%"></div>
                    <h3>Frontend Development</h3>
                    <p>HTML5, CSS3, JavaScript ES6+, responsive design, modern CSS frameworks, and progressive web app development</p>
                </div>

                <div class="skill-card">
                    <div class="skill-icon"><img width="100%" height="100%" src="php.jpg" alt=""></div>
                    <h3>Backend Development</h3>
                    <p>PHP, MySQL, RESTful APIs, aut hentication systems, database design, and server-side application architecture</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><img width="100%" height="100%" src="f.png" alt=""></div>
                    <h3>Full Stack Integration</h3>
                    <p>Complete application development, API integration, deployment strategies, and modern development workflows</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><img width="100%" height="100%" src="emm.jpg" alt=""></div>
                    <h3>Embedded System</h3>
                    <p>Creating every layers of PCB ranging from 1, 2 and above in a professional and well design way.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">Portfolio</div>
                <h2 class="section-title">Featured Projects</h2>
                <p class="section-description">A collection of projects showcasing my skills across different technologies and domains</p>
            </div>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image1"> <img src="mssn.png" alt="" style="width: 100%; height: 100%;"></div>
                    <div class="project-content">
                        <h3>Interactive website offered to the BUk Ummah</h3>
                        <p>A platform that Connect BUK student to the MSSN_UK Offerings, which includes: Islamiyya Classes
, Life-Changing Lectures & Da'Wah
, Academic Mentorship & Welfare Support
and Community Development Projects
to mension a few. Built with modern Ui/Ux and responsive design.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">HTML</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                        <div class="project-links">
                            <a href="http://mssn-buk.vercel.app" class="project-link">Live Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image1"> <img src="vtu.png" alt="" style="width: 100%; height: 100%;"></div>
                    <div class="project-content">
                        <h3>Niserve VTU(Data/Airtime) Platform</h3>
                        <p>Full-featured VTU platform with user authentication, payment processing, inventory management, and admin dashboard. Built with modern security practices and responsive design.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">MYSQL</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">API Plugins</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Live Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image"> <img src="port.png" alt="" style="width: 100%; height: 100%;"></div>
                    <div class="project-content">
                        <h3>Interactive Portfolio Website</h3>
                        <p>Responsive portfolio with smooth animations, dark mode toggle, contact form integration, and optimized performance. Features modern design principles and accessibility standards.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">GSAP</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Live Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image"> <img src="pcb.png" alt="" style="width: 100%; height: 100%;"></div>
                    <div class="project-content">
                        <h3>Smart Home Automation Board</h3>
                        <p>A well route ESP8266 based Home Automation oard use for controlling home appliences either remotely or automated.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Skematicts Drawing</span>
                            <span class="tech-tag">PCB design</span>
                            <span class="tech-tag">C++ Language</span>
                            <span class="tech-tag">PCB Routing</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Live Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">📝 Blog Platform</div>
                    <div class="project-content">
                        <h3>Advanced CMS Blog System</h3>
                        <p>Full-featured blog platform with rich text editor, user roles, comment system, SEO optimization, and comprehensive admin dashboard for content management.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">TinyMCE</span>
                            <span class="tech-tag">Bootstrap</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Live Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">🔢 Calculator Pro</div>
                    <div class="project-content">
                        <h3>Scientific Calculator Suite</h3>
                        <p>Advanced calculator with scientific functions, graphing capabilities, equation solver, and history tracking. Built with React and advanced mathematical libraries.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">Math.js</span>
                            <span class="tech-tag">D3.js</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Live Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="skills" class="skills" style="margin-top: -5rem;">
        <div class="container" id="mes">
            <div class="section-header">
                <div class="section-badge">💬 Let's Connect</div>
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-description">Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.</p>
            </div>
            <div class="contact-content">
                <form class="contact-form" id="contactForm" method="POST" action="send-email.php">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required placeholder="Enter your email address">
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required placeholder="What's this about?">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="container" >
            <div class="footer-content" >
                <div class="footer-text">
                    <p>&copy; 2025 Nazifi Ibrahim. All rights reserved.</p>
                </div>
                <div class="social-links">
                    <a href="https://github.com/Nazifi-Ni" class="social-link" aria-label="GitHub" target="_blank" rel="noopener"> 
                        <i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/nazifi-ibrahim-25031731a" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener"> 
                        <i class="fab fa-linkedin"></i></a>
                    <a href="#" class="social-link" aria-label="Twitter" target="_blank" rel="noopener"> 
                        <i class="fab fa-twitter"></i></a>
                    <a href="emailto@example.com" class="social-link" aria-label="Email" target="_blank" rel="noopener"> 
                        <i class="fa fa-envelope" aria-hidden="true"></i></a>
                    <a href="#" class="social-link" aria-label="Whatsapp" target="_blank" rel="noopener"> 
                        <i class="fab fa-whatsapp" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </footer>


            <script src="script.js">
            //   injected js 
            </script>
</body>
</html>
