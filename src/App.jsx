import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Menu, MoveUpRight } from "lucide-react";

import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import Hostel from "./assets/hostelhome.png";
import Profile from "./assets/profile-picture.jpg";

/***** Navigation links *****/
const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/***** Project cards data *****/
const projects = [
  {
    type: "GuideLink : Digital intervention System",
    title: "GuideLink",
    image: Hostel,
    alt: "Capstone Project",
    description:
      "Digital Intervention System for Bulacan State University - Meneses Campus. A web-based application that provides a platform for students to access information and resources related to their academic and personal development.",
  },
  {
    type: "Hostel Dormitory | Bulacan State University",
    title: "Hostel Dormitory",
    image: Hostel,
    alt: "Internship Project at ICTO",
    description:
      "A planning space for distributed teams with shared goals, crisp decisions, and lightweight async updates.",
  },
  {
    type: "EduQuest - Your Personal Learning Companion",
    title: "EduQuest",
    image: Hostel,
    alt: "3rd Year Project",
    description:
      "A flexible visual identity and website system for a boutique interior studio launching its first digital sales channel.",
  },
];

/***** Experience section data *****/
const roles = [
  {
    years: "January 2026 - April 2026 ",
    title: "Front-End Developer Intern | Bulacan State University",
    summary:
      "Worked on the development of a Hostel Dormitory Management System, contributing to the front-end implementation and user interface design.",
  }
];

/***** Skills section data *****/
const skills = [
  "Front-End Web Dev",
  "Interface Design",
  "Design Systems",
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "PhP",
  "C, C++, C#",
  "React",
  "Accessibility",
];

/***** Contact section links *****/
const contactLinks = [
  ["jovertcardiente0999@gmail.com", "#"],
  ["LinkedIn", "https://www.linkedin.com/in/john-jovert-cardiente-7843313bb/"],
  ["GitHub", "https://github.com/Yuuto-r"],
];

/***** Hero carousel images *****/
const heroSlides = [
  {
    image:
      Hostel,
    alt: "Modern creative workspace with laptop and design materials",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer working on a laptop with code editor open",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    alt: "Team reviewing product work around a table",
  },
];

/***** Header / navigation section *****/
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <img className="brand-mark" src={Profile} alt="John Jovert home" />

      <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <Button
        className="md:hidden"
        variant="outline"
        size="icon"
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
}

/***** Hero section *****/
function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  function showPreviousSlide() {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  }

  function showNextSlide() {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  }

  useEffect(() => {
    const timer = window.setInterval(showNextSlide, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="section-kicker">Web and Mobile App Developer</p>
        <h1 className="hero-title">John Jovert C. Cardiente</h1>
        <p className="hero-text">
          Turning ideas into fast, functional, and beautiful web and mobile
          applications from concept to launch.
        </p>

        <div className="button-row">
          <Button asChild>
            <a href="#work">View Projects</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>

      <figure className="hero-image">
        <img
          key={currentSlide.image}
          src={currentSlide.image}
          alt={currentSlide.alt}
        />

        <div className="carousel-controls">
          <Button
            variant="outline"
            size="icon"
            type="button"
            aria-label="Show previous image"
            onClick={showPreviousSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            type="button"
            aria-label="Show next image"
            onClick={showNextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="carousel-dots" aria-label="Choose hero image">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === activeSlide}
              key={slide.image}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </figure>
    </section>
  );
}

/***** Project card component *****/
function ProjectCard({ project }) {
  return (
    <Card>
      <img className="project-image" src={project.image} alt={project.alt} />
      <CardContent>
        <p className="section-kicker">{project.type}</p>
        <h3 className="card-title">{project.title}</h3>
        <p className="muted-text">{project.description}</p>
        <Button className="mt-3 px-0" asChild variant="ghost">
          <a href="#">
            View
            <MoveUpRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

/***** Main page layout *****/
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name || "N/A"}\nEmail: ${formData.email || "N/A"}\n\nMessage:\n${formData.message || ""}`
    );

    setStatus("Your email app will open with the message prepared.");
  }

  return (
    <div className="app-shell">
      <Header />

      <main id="top">
        <Hero />

        {/***** Profile section *****/}
        <section className="profile-section">
          <div className="profile-grid">
            <div>
              <p className="section-kicker">Profile</p>
              <h2 className="section-title">
                Design-minded engineering for products people return to.
              </h2>
            </div>
            <p className="body-text">
              Replace this copy with your own story: what you make, who you
              help, and why your work is valuable. Keep it direct, human, and
              specific.
            </p>
          </div>
        </section>

        {/***** Projects section *****/}
        <section className="page-section" id="work" aria-labelledby="work-title">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title" id="work-title">
            Projects
          </h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </section>

        {/***** Experience section *****/}
        <section className="dark-section" id="experience">
          <div className="page-section">
            <p className="section-kicker text-[#89d8cf]">Experience</p>
            <h2 className="section-title text-white">Recent Roles</h2>
            <div className="timeline">
              {roles.map((role) => (
                <article className="timeline-item" key={role.title}>
                  <span>{role.years}</span>
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/***** Skills section *****/}
        <section className="profile-section" id="skills">
          <div className="page-section">
            <p className="section-kicker">Capabilities</p>
            <h2 className="section-title">Skills</h2>
            <div className="skill-list">
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </section>

        {/***** Contact section *****/}
        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Have a project in mind?</h2>
            <p className="body-text">
              Send a note about what you are building, what you need help with,
              and the timeline you are aiming for.
            </p>

            <div className="contact-links">
              {contactLinks.map(([label, href]) => (
                <a
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span>{label}</span>
                  <MoveUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your idea..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <Button type="submit">Send Email</Button>
            {status ? <p className="form-status">{status}</p> : null}
          </form>
        </section>
      </main>

      {/***** Footer section *****/}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} John Jovert C. Cardiente. All rights reserved.</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
