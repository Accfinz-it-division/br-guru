import styles from "./page.module.css";

const services = [
  {
    number: "01",
    title: "Business Registration",
    description:
      "Get your business officially registered with guidance throughout the registration process and required documentation.",
  },
  {
    number: "02",
    title: "Company Registration",
    description:
      "Establish your company with support for incorporation, registration requirements and essential legal documentation.",
  },
  {
    number: "03",
    title: "PAYE",
    description:
      "Get support with Pay As You Earn tax obligations, payroll tax calculations and related compliance requirements.",
  },
  {
    number: "04",
    title: "EPF & ETF",
    description:
      "Manage employee EPF and ETF registrations, contributions and ongoing statutory reporting requirements.",
  },
  {
    number: "05",
    title: "TDL",
    description:
      "Get assistance with relevant tax documentation, registrations and compliance requirements for your business.",
  },
  {
    number: "06",
    title: "BOI Services",
    description:
      "Receive guidance on Board of Investment-related applications, documentation and business requirements.",
  },
  {
    number: "07",
    title: "SVAT",
    description:
      "Get assistance with Simplified VAT-related registration, documentation and applicable compliance requirements.",
  },
  {
    number: "08",
    title: "VAT Registration",
    description:
      "Navigate VAT registration, documentation and ongoing tax compliance with professional support.",
  },
  {
    number: "09",
    title: "TIN Registration",
    description:
      "Obtain your Taxpayer Identification Number with support for registration and the required documentation.",
  },
  {
    number: "10",
    title: "Name Approval",
    description:
      "Check and submit your proposed business or company name for approval before proceeding with registration.",
  },
  {
    number: "11",
    title: "Form Filling",
    description:
      "Get help completing business registration forms, official applications and essential corporate documents.",
  },
  {
    number: "12",
    title: "eROC Services",
    description:
      "Access support for Sri Lanka's electronic Registrar of Companies system, including online filings and company-related submissions.",
  },
  {
    number: "13",
    title: "Company Name Changes",
    description:
      "Update your registered company name with assistance preparing the necessary documents and statutory filings.",
  },
  {
    number: "14",
    title: "Forms 1 & 18 & 19",
    description:
      "Get assistance preparing and submitting company-related statutory forms for director and secretary appointments or changes, as applicable.",
  },
  {
    number: "15",
    title: "Payroll Services",
    description:
      "Simplify monthly payroll processing, salary calculations, employee records and statutory payroll deductions.",
  },
  {
    number: "16",
    title: "Bookkeeping",
    description:
      "Keep your financial records organized with accurate transaction recording, expense tracking and account reconciliation.",
  },
  {
    number: "17",
    title: "Accounting Services",
    description:
      "Understand your business finances with support for financial statements, account management and reporting.",
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

      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span />සැඟවුණු ගාස්තු කිසිවක් නොමැති , ශ්‍රී ලංකාවේ අංක 1 විශ්වාසනීයම ආයතනය   BR Consultants  සමගින්  ඔබේ සමාගමත් ලියාපදිංචි කරගන්න අදම අමතන්න!</p>
          <h1 id="hero-heading">
            Big ideas deserve
            <br />
            <span>a proper start.</span>
          </h1>
          <p className={styles.heroDescription}>
          With over 10 years of experience, our professional team provides high-quality services at the best prices, with no additional charges, fast service, and free consultations.
          </p>
          <img className={styles.image} src="/image.png" alt="human" />
        </div>
      </section>

      <section>
        <div className={styles.service}>
          <div>
            <p className={styles.eyebrow}><span /> HOW WE HELP</p>
            <h2 id="services-heading">Have an idea, <em>or project?</em></h2>
          </div>
          <p className={styles.sectionDescription}>
            We simplify business registration and corporate services so you can focus on growing your business.
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
        <video className={styles.video} autoPlay muted controls  >
      <source  src="/home-page-video.mp4" type="video/mp4" />
        </video>
      
        <div className={styles.processHeading}>
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
        {/* <a className={styles.brand} href="#" aria-label="BR Guru home">
          <span className={styles.brandMark} aria-hidden="true">br</span>
          <span className={styles.brandName}>br<span>guru</span><small>.lk</small></span>
        </a> */}
        <p>Business registration &amp; corporate services in Sri Lanka.</p>
        <span className={styles.copyright}>© 2026 BR Guru. All rights reserved.</span>
      </footer>
      {/* <img className={styles.whatsapp} src="/whatsapp.gif" alt="whatsapp" /> */}
    </main>
  );
}
