import styles from "./page.module.css";

const services = [
  {
    number: "01",
    title: "Company incorporation",
    description:
      "Get your company set up with guidance on the registration process and the documents you need.",
  },
  {
    number: "02",
    title: "Business name registration",
    description:
      "Take the first step towards making your business official with support through name registration.",
  },
  {
    number: "03",
    title: "Company secretarial",
    description:
      "Stay on top of company records, statutory requirements and ongoing corporate administration.",
  },
  {
    number: "04",
    title: "Tax and compliance support",
    description:
      "Get help understanding the registrations and recurring compliance tasks your business may need.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us your plans",
    description: "Share what you’re starting and where you are in the process.",
  },
  {
    number: "02",
    title: "Get a clear checklist",
    description: "We’ll help you understand the information and documents required.",
  },
  {
    number: "03",
    title: "Move forward with confidence",
    description: "Get practical support as you work through your next steps.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>

      <header className={styles.header}>
        <a className={styles.brand} href="#" aria-label="BR Guru home">
          <span className={styles.brandMark} aria-hidden="true">br</span>
          <span className={styles.brandName}>br<span>guru</span><small>.lk</small></span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#services">Home</a>
          <a href="#how-it-works">About us</a>
          <a href="#about">Services</a>
          <a href="#about">Tools</a>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> SRI LANKAN BUSINESS, MADE SIMPLE</p>
          <h1 id="hero-heading">
            Big ideas deserve
            <br />
            <span>a proper start.</span>
          </h1>
          <p className={styles.heroDescription}>
            Starting a business is a big move. We make the registration and
            corporate essentials feel a whole lot simpler — so you can focus on
            building what comes next.
          </p>
          <img className={styles.image} src="/image.png" alt="human" />
        </div>
      </section>

      <section>
        <div className={styles.service}>
          <div>
            <p className={styles.eyebrow}><span /> HOW WE HELP</p>
            <h2 id="services-heading">The essentials, <em>handled.</em></h2>
          </div>   
          <p className={styles.sectionDescription}>
              From your first registration to the details that keep a business
              moving, get support that makes the process easier to understand.
            </p>
          </div> 
           <div className={styles.serviceGrid}>
          {services.map((service) => (
            <a className={styles.serviceCard} href="#contact" key={service.number}>
              <span className={styles.serviceNumber}>{service.number}</span>
              <span className={styles.serviceArrow} aria-hidden="true">↗</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {/* <span className={styles.serviceLink}>Find out more <span aria-hidden="true">→</span></span> */}
            </a>
          ))}
        </div>  
      </section>
      {/* <section className={styles.servicesSection} id="services" aria-labelledby="services-heading">
        <div className={styles.sectionIntro}>
          <div>
           
          </div>
          <p className={styles.sectionDescription}>
          
          </p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <a className={styles.serviceCard} href="#contact" key={service.number}>
              <span className={styles.serviceNumber}>{service.number}</span>
              <span className={styles.serviceArrow} aria-hidden="true">↗</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className={styles.serviceLink}>Find out more <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </section> */}

      <section className={styles.processSection} id="how-it-works" aria-labelledby="process-heading">
        <div className={styles.processHeading} id="about">
          <p className={styles.eyebrow}><span /> A LITTLE LESS OVERWHELMING</p>
          <h2 id="process-heading">Good things happen<br />when the path is <em>clear.</em></h2>
          <p>Business paperwork doesn’t have to feel like a maze. We bring clarity to the process and keep you moving, one step at a time.</p>
          <a className={styles.textButton} href="#contact">Meet your business partner <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div className={styles.step} key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className={styles.stepMark} aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactSection} id="contact" aria-labelledby="contact-heading">
        <div>
          <p className={styles.eyebrow}><span /> READY WHEN YOU ARE</p>
          <h2 id="contact-heading">Let’s make your<br /><em>next step</em> a real one.</h2>
        </div>
        <div className={styles.contactAside}>
          <p>Explore the services below to find a good place to begin with your business.</p>
          <a className={styles.contactButton} href="#services">
            Explore services <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.contactDecoration} aria-hidden="true">br<span>guru</span></div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#" aria-label="BR Guru home">
          <span className={styles.brandMark} aria-hidden="true">br</span>
          <span className={styles.brandName}>br<span>guru</span><small>.lk</small></span>
        </a>
        <p>Business registration &amp; corporate services in Sri Lanka.</p>
        <span className={styles.copyright}>© 2026 BR Guru. All rights reserved.</span>
      </footer>
    </main>
  );
}
