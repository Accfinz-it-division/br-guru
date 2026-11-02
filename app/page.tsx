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
    title: "𝗡𝗮𝗺𝗲 𝗥𝗲𝘀𝗲𝗿𝘃𝗮𝘁𝗶𝗼𝗻",
    description: "- Name Search: Conduct a name search to ensure that the proposed company name is not already in use. This can be done through the Department of the Registrar of Companies (ROC) website - Name Reservation Application: Submit Form A16 (Name Reservation Form) to reserve the company name. This name will be reserved for 3 months.",
  },
  {
    number: "02",
    title: "𝗣𝗿𝗲𝗽𝗮𝗿𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝘀",
    description: `- Articles of Association: Prepare the Articles of Association for the company, which outlines the regulations for the management of the company.
- Form 1: Application for Registration of a Company. This includes the company’s name, the registered office address, details of directors, and details of the secretary.
- Form 18: Consent and Certificate of Director.
- Form 19: Consent and Certificate of Secretary.`,
  },
  {
    number: "03",
    title: "𝗦𝘂𝗯𝗺𝗶𝘀𝘀𝗶𝗼𝗻 𝗼𝗳 𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝘀",
    description: `Submit the following documents to the Department of the Registrar of Companies:
- Form 1 (Application for Registration of a Company)
- Articles of Association
- Form 18 (Consent and Certificate of Director)
- Form 19 (Consent and Certificate of Secretary)
- Name Reservation Certificate received after name reservation.`,
  },
  {
    number: "04",
    title: "𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗼𝗳 𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻 𝗙𝗲𝗲𝘀",
    description: "Pay the prescribed registration fees. The fee structure can be obtained from the ROC website or their office.",
  },
  {
    number: "05",
    title: "𝗜𝘀𝘀𝘂𝗮𝗻𝗰𝗲 𝗼𝗳 𝗖𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗲 𝗼𝗳 𝗜𝗻𝗰𝗼𝗿𝗽𝗼𝗿𝗮𝘁𝗶𝗼𝗻",
    description: `Upon approval of the submitted documents and payment of fees, the Registrar of Companies will issue a Certificate of Incorporation. This certificate signifies that the company is duly incorporated under the Companies Act No. 7 of 2007.`,
  },
  {
    number: "06",
    title: "𝗣𝗼𝘀𝘁-𝗜𝗻𝗰𝗼𝗿𝗽𝗼𝗿𝗮𝘁𝗶𝗼𝗻 𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗺𝗲𝗻𝘁𝘀",
    description: `- Register for Taxes: Register with the Inland Revenue Department to obtain a Taxpayer Identification Number (TIN) and other necessary tax registrations such as VAT if applicable.
- Open a Bank Account: Open a bank account in the name of the company for financial transactions.
- Maintain Statutory Registers: Maintain the necessary statutory registers, including the register of members, register of directors, and register of secretaries.
- File Annual Returns: Ensure that annual returns and other necessary documents are filed with the Registrar of Companies as required.`,
  },
  {
    number: "",
    title: "𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗖𝗼𝗻𝘀𝗶𝗱𝗲𝗿𝗮𝘁𝗶𝗼𝗻𝘀",
    description: `- Board of Directors: A private limited company must have at least one director who is ordinarily resident in Sri Lanka.
- Company Secretary: A company secretary must be appointed. The secretary can be an individual or a corporate entity.
- Registered Office: The company must have a registered office in Sri Lanka.`,
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
          <img className={styles.image} src="/company.png" alt="human" />
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
            <a className={styles.serviceCard} href="/services" key={service.number}>
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
          <source src="/home-page-video.mp4" type="video/mp4" />
        </video>

        <div className={styles.processHeading}>
          <p className={styles.eyebrow}><span /> Most Trusted & Professional Business Consultancy Service in Sri Lanka,</p>
          <h2 id="process-heading">ඔබේ  ව්‍යාපාරය <br />නිත්‍යානුකූලව සමාගමක් ලෙස <em>ලියාපදිංචි කිරීමට අවශ්‍ය ද?</em></h2>
          <p>ව්‍යාපාරය ලියාපදිංචි කිරීම තුලින් ඔබගේ ව්‍යාපාරයේ නෛතික පිලිගැනීම හා  පාරිභෝගිකයන්, කොටස්කරුවන් සහ මූල්‍ය ආයතනයන්හි  විශ්වාසනීයත්වය තවදුරටත් තහවුරු කරගත හැක.</p>
          <a className={styles.textButton} href="https://wa.me/+94718035537" target="_blank">
            Meet your business partner <span aria-hidden="true">↗</span>
          </a>
        </div>

      </section>
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
      <section className={styles.contactSection} id="contact" aria-labelledby="contact-heading">
        <div>
          <p className={styles.eyebrow}><span /> READY WHEN YOU ARE</p>
          <h2 id="contact-heading">Let’s make your<br /><em>next step</em> a real one.</h2>
        </div>
        <div className={styles.contactAside}>
          <p>Explore the services below to find a good place to begin with your business.</p>
          <a className={styles.contactButton} href="/services">
            Explore services <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.contactDecoration} aria-hidden="true">br<span>guru</span></div>
      </section>


      {/* <img className={styles.whatsapp} src="/whatsapp.gif" alt="whatsapp" /> */}
    </main>
  );
}
