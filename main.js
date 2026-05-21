/**
 * Career AI - Main JavaScript
 * Handles form submission, fake AI loading animation,
 * conditional career logic, scroll effects, and UI interactions
 */

// ============================================
// CAREER DATA & LOGIC
// ============================================

const careerData = {
    ai: {
        beginner: {
            path: "AI/ML Engineer — Start with Foundations",
            skills: [
                "Python Programming Fundamentals",
                "Basic Mathematics (Linear Algebra, Calculus)",
                "Statistics & Probability",
                "Introduction to Machine Learning",
                "Data Manipulation with Pandas & NumPy"
            ],
            tools: ["Python", "Jupyter Notebook", "Google Colab", "Scikit-learn", "Pandas", "NumPy"],
            roadmap: [
                "Learn Python basics (3 months)",
                "Study math fundamentals for AI (2 months)",
                "Complete a data science course (3 months)",
                "Build your first ML model with Scikit-learn",
                "Participate in Kaggle beginner competitions",
                "Create a portfolio with 2-3 projects"
            ]
        },
        intermediate: {
            path: "ML Engineer — Deep Dive into Advanced Models",
            skills: [
                "Deep Learning & Neural Networks",
                "TensorFlow / PyTorch",
                "Computer Vision or NLP",
                "Model Deployment (MLOps)",
                "Experiment Tracking & Version Control"
            ],
            tools: ["TensorFlow", "PyTorch", "Docker", "MLflow", "AWS/GCP", "Git"],
            roadmap: [
                "Master deep learning frameworks (3 months)",
                "Choose a specialization: CV or NLP (3 months)",
                "Learn model deployment & MLOps basics",
                "Build end-to-end ML pipeline projects",
                "Contribute to open-source ML projects",
                "Prepare for ML Engineer interviews"
            ]
        },
        advanced: {
            path: "Senior AI Researcher / AI Architect",
            skills: [
                "Advanced Deep Learning Architectures",
                "Research Paper Implementation",
                "Distributed Training & Optimization",
                "AI System Design & Architecture",
                "Leading AI Teams & Strategy"
            ],
            tools: ["PyTorch", "Kubernetes", "Ray", "Weights & Biases", "DVC", "FastAPI"],
            roadmap: [
                "Publish or implement research papers",
                "Design scalable AI systems for production",
                "Lead AI initiatives in enterprise projects",
                "Mentor junior AI engineers",
                "Speak at AI conferences & build personal brand",
                "Explore AI startup opportunities"
            ]
        }
    },
    web: {
        beginner: {
            path: "Frontend Developer — Build the Modern Web",
            skills: [
                "HTML5, CSS3 & Responsive Design",
                "JavaScript (ES6+)",
                "DOM Manipulation & Events",
                "Basic React or Vue.js",
                "Git & GitHub Workflow"
            ],
            tools: ["VS Code", "Chrome DevTools", "Git", "Figma", "React", "Tailwind CSS"],
            roadmap: [
                "Master HTML/CSS with 3 static websites (2 months)",
                "Learn JavaScript deeply with projects (2 months)",
                "Pick React or Vue and build 2 apps (3 months)",
                "Learn responsive & mobile-first design",
                "Deploy projects on Vercel/Netlify",
                "Apply for Junior Frontend Developer roles"
            ]
        },
        intermediate: {
            path: "Full-Stack Developer — Frontend + Backend",
            skills: [
                "Advanced React Patterns & State Management",
                "Node.js & Express Backend",
                "Database Design (SQL & NoSQL)",
                "API Development & Authentication",
                "Deployment & CI/CD"
            ],
            tools: ["React", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS"],
            roadmap: [
                "Build complex React apps with Redux/Context (2 months)",
                "Learn Node.js and build RESTful APIs (2 months)",
                "Design databases for real-world apps (1 month)",
                "Create full-stack applications (2 months)",
                "Learn Docker & cloud deployment",
                "Build a SaaS MVP as a portfolio piece"
            ]
        },
        advanced: {
            path: "Senior Software Architect / Tech Lead",
            skills: [
                "System Design & Scalability",
                "Microservices Architecture",
                "Performance Optimization",
                "Security Best Practices",
                "Team Leadership & Code Review"
            ],
            tools: ["Kubernetes", "GraphQL", "Redis", "Kafka", "Terraform", "AWS/GCP"],
            roadmap: [
                "Design high-scale distributed systems",
                "Lead architecture decisions for products",
                "Optimize performance for millions of users",
                "Mentor and manage development teams",
                "Build developer tools or open-source libraries",
                "Consult for startups or found your own"
            ]
        }
    },
    seo: {
        beginner: {
            path: "SEO Specialist — Master Search Visibility",
            skills: [
                "SEO Fundamentals & How Search Works",
                "Keyword Research & Analysis",
                "On-Page SEO Optimization",
                "Technical SEO Basics",
                "Google Analytics & Search Console"
            ],
            tools: ["Google Analytics", "Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Yoast SEO"],
            roadmap: [
                "Complete Google's SEO fundamentals course (1 month)",
                "Learn keyword research with Ahrefs/SEMrush (1 month)",
                "Audit and optimize a real website (2 months)",
                "Build backlinks for a small project",
                "Get Google Analytics certification",
                "Apply for Junior SEO Specialist roles"
            ]
        },
        intermediate: {
            path: "Digital Marketing Manager — Strategy & Growth",
            skills: [
                "Advanced Technical SEO",
                "Content Marketing Strategy",
                "PPC & Paid Advertising",
                "Conversion Rate Optimization",
                "Marketing Analytics & Reporting"
            ],
            tools: ["Google Ads", "Facebook Ads Manager", "HubSpot", "Looker Studio", "Hotjar", "Mailchimp"],
            roadmap: [
                "Master technical SEO for large sites (2 months)",
                "Build a content marketing strategy (2 months)",
                "Run and optimize Google/Facebook ad campaigns (2 months)",
                "Implement CRO experiments and A/B testing",
                "Create automated marketing dashboards",
                "Lead digital marketing for a company or client"
            ]
        },
        advanced: {
            path: "Growth Director / CMO — Scale Businesses",
            skills: [
                "Multi-Channel Growth Strategy",
                "Brand Building & Positioning",
                "Data-Driven Decision Making",
                "Team Management & Budgeting",
                "International SEO & Expansion"
            ],
            tools: ["Salesforce", "Tableau", "Marketo", "Drift", "Clearbit", "Segment"],
            roadmap: [
                "Develop growth strategy for a brand (3 months)",
                "Build and lead a marketing team",
                "Implement marketing automation at scale",
                "Drive 10x revenue growth through SEO & ads",
                "Speak at marketing conferences",
                "Launch your own marketing agency or consult"
            ]
        }
    },
    design: {
        beginner: {
            path: "UI/UX Designer — Design Beautiful Interfaces",
            skills: [
                "Design Principles & Color Theory",
                "Typography & Layout",
                "Figma or Adobe XD",
                "Wireframing & Prototyping",
                "User Research Basics"
            ],
            tools: ["Figma", "Adobe Illustrator", "Whimsical", "Miro", "Dribbble", "Coolors"],
            roadmap: [
                "Learn design principles with practice projects (2 months)",
                "Master Figma with UI kits and auto-layout (2 months)",
                "Redesign 2-3 existing apps for practice",
                "Learn basic prototyping & user flows",
                "Build a portfolio on Behance/Dribbble",
                "Apply for Junior UI/UX Designer roles"
            ]
        },
        intermediate: {
            path: "Product Designer — Research to Prototype",
            skills: [
                "User Research & Personas",
                "Information Architecture",
                "Usability Testing",
                "Design Systems & Component Libraries",
                "Interaction Design & Micro-animations"
            ],
            tools: ["Figma", "FigJam", "ProtoPie", "UserTesting", "Maze", "Notion"],
            roadmap: [
                "Conduct user research for a real product (2 months)",
                "Build a scalable design system (2 months)",
                "Lead usability testing sessions",
                "Design complex product features end-to-end",
                "Collaborate closely with engineering",
                "Build a case-study portfolio for senior roles"
            ]
        },
        advanced: {
            path: "Design Lead / Creative Director — Shape Vision",
            skills: [
                "Strategic Design Thinking",
                "Brand Identity & Vision",
                "Cross-Functional Leadership",
                "Design Operations & Scaling",
                "Trend Forecasting & Innovation"
            ],
            tools: ["Figma Enterprise", "After Effects", "Cinema 4D", "Jira", "Linear", "Loom"],
            roadmap: [
                "Define product vision and design strategy",
                "Build and mentor a design team",
                "Establish design ops and processes",
                "Create award-winning brand experiences",
                "Speak at design conferences & write articles",
                "Launch a design studio or creative agency"
            ]
        }
    },
    freelancing: {
        beginner: {
            path: "Freelancer — Start Earning Independently",
            skills: [
                "Identify Your Sellable Skill",
                "Client Communication & Proposals",
                "Basic Project Management",
                "Pricing & Negotiation",
                "Building an Online Presence"
            ],
            tools: ["Upwork", "Fiverr", "Notion", "Trello", "Calendly", "PayPal/Stripe"],
            roadmap: [
                "Choose your niche and define services (1 month)",
                "Build a simple portfolio website (1 month)",
                "Create profiles on Upwork & Fiverr",
                "Apply to 20+ gigs and land your first client",
                "Deliver excellent work and get reviews",
                "Scale to $1K/month consistently"
            ]
        },
        intermediate: {
            path: "Solopreneur — Build a One-Person Business",
            skills: [
                "Productized Services",
                "Marketing & Content Creation",
                "Automation & Systems",
                "Client Retention & Upselling",
                "Financial Management"
            ],
            tools: ["Stripe", "Zapier", "Webflow", "Loom", "Lemlist", "QuickBooks"],
            roadmap: [
                "Productize your service offerings (2 months)",
                "Build an automated lead generation funnel",
                "Create content to establish authority",
                "Implement systems to reduce manual work",
                "Raise prices and work with better clients",
                "Scale to $5K-$10K/month revenue"
            ]
        },
        advanced: {
            path: "Agency Founder — Scale Beyond Yourself",
            skills: [
                "Team Building & Delegation",
                "Agency Operations & Systems",
                "High-Ticket Sales & Partnerships",
                "Strategic Business Development",
                "Wealth Building & Investment"
            ],
            tools: ["Salesforce", "Asana", "Slack", "Gusto", "HubSpot", "Stripe Connect"],
            roadmap: [
                "Hire your first contractors/employees",
                "Systematize delivery for consistent quality",
                "Win enterprise and retainer clients",
                "Build a brand recognized in your niche",
                "Scale to 6-figure annual revenue",
                "Consider productizing into SaaS or courses"
            ]
        }
    }
};

const interestLabels = {
    ai: "Artificial Intelligence",
    web: "Web Development",
    seo: "SEO & Marketing",
    design: "Graphic Design",
    freelancing: "Freelancing"
};

const levelLabels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced"
};

// ============================================
// DOM ELEMENTS
// ============================================

const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const careerForm = document.getElementById('careerForm');
const resultCard = document.getElementById('resultCard');
const loadingState = document.getElementById('loadingState');
const resultContent = document.getElementById('resultContent');
const emptyState = document.getElementById('emptyState');
const progressFill = document.getElementById('progressFill');
const resetBtn = document.getElementById('resetBtn');
const saveBtn = document.getElementById('saveBtn');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const heroParticles = document.getElementById('heroParticles');

// ============================================
// NAVIGATION
// ============================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// ============================================
// HERO PARTICLES
// ============================================

function createParticles() {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        heroParticles.appendChild(particle);
    }
}

// ============================================
// CAREER FORM & AI LOGIC
// ============================================

careerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const interest = document.getElementById('userInterest').value;
    const skill = document.getElementById('userSkill').value;

    if (!name || !interest || !skill) return;

    // Show loading, hide empty and result
    emptyState.style.display = 'none';
    resultContent.classList.remove('active');
    loadingState.classList.add('active');

    // Animate progress bar
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 25 + 10;
        if (progress >= 100) progress = 100;
        progressFill.style.width = progress + '%';
    }, 300);

    // Wait 2.5 seconds (AI thinking simulation)
    await new Promise(resolve => setTimeout(resolve, 2500));

    clearInterval(progressInterval);
    progressFill.style.width = '100%';

    // Get career data
    const data = careerData[interest][skill];

    // Update result content
    document.getElementById('resultGreeting').textContent = `Hello, ${name}!`;
    document.getElementById('resultInterest').textContent = interestLabels[interest];
    document.getElementById('resultLevel').textContent = levelLabels[skill];
    document.getElementById('careerPath').textContent = data.path;

    // Skills list
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';
    data.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Tools grid
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';
    data.tools.forEach(tool => {
        const span = document.createElement('span');
        span.className = 'tool-tag';
        span.textContent = tool;
        toolsGrid.appendChild(span);
    });

    // Roadmap list
    const roadmapList = document.getElementById('roadmapList');
    roadmapList.innerHTML = '';
    data.roadmap.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        roadmapList.appendChild(li);
    });

    // Hide loading, show result
    loadingState.classList.remove('active');
    resultContent.classList.add('active');

    // Reset progress for next time
    setTimeout(() => {
        progressFill.style.width = '0%';
    }, 500);
});

// Reset button
resetBtn.addEventListener('click', () => {
    careerForm.reset();
    resultContent.classList.remove('active');
    emptyState.style.display = 'block';
    progressFill.style.width = '0%';
});

// Save button (simulated)
saveBtn.addEventListener('click', () => {
    showToast('Career plan saved to your device!');
});

// ============================================
// CONTACT FORM
// ============================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent! We\'ll get back to you soon.');
    contactForm.reset();
});

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
    const reveals = document.querySelectorAll('.glass-card, .section-header');
    
    reveals.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// BUTTON HOVER GLOW EFFECT
// ============================================

document.querySelectorAll('.btn-glow').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// FORM INPUT FOCUS EFFECTS
// ============================================

document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.closest('.form-group')?.classList.add('focused');
    });
    input.addEventListener('blur', function() {
        this.closest('.form-group')?.classList.remove('focused');
    });
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initScrollReveal();

    // Add stagger delay to feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add stagger delay to project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });
});
