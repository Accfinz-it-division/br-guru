import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: 'Business Registration & Corporate Services',
  description:
    'Explore business registration, company incorporation, tax consultancy and corporate secretarial services in Sri Lanka.',

  alternates: {
    canonical: '/services',
  },
}

const accountingServices = [
    {
        number: "01",
        title: "Computerized Accounting",
        description:
            "Manage your business finances efficiently with computerized accounting solutions, accurate financial records and streamlined accounting processes.",
    },
    {
        number: "02",
        title: "Bookkeeping",
        description:
            "Maintain accurate financial records by tracking daily transactions, income, expenses and other essential business financial activities.",
    },
    {
        number: "03",
        title: "Final Accounts Preparation",
        description:
            "Prepare accurate final accounts, including trading accounts, profit and loss accounts and balance sheets to evaluate your business performance.",
    },
    {
        number: "04",
        title: "Financial Statements Preparation",
        description:
            "Get professionally prepared financial statements, including income statements, balance sheets and cash flow statements for clear financial reporting.",
    },
    {
        number: "05",
        title: "Management Accounts Preparation",
        description:
            "Gain valuable insights into your business performance through management accounts, financial reports and information to support better decision-making.",
    }
];
const taxServices = [
    {
        number: "01",
        title: "Tax Consultancy",
        description:
            "Get professional tax consultancy services, including tax planning, compliance guidance and support with business and personal tax obligations.",
    },
    {
        number: "02",
        title: "Tax Planning",
        description:
            "Plan your taxes effectively with professional guidance to manage tax liabilities, identify applicable benefits and maintain tax compliance.",
    },
    {
        number: "03",
        title: "Tax Computation",
        description:
            "Calculate your tax liabilities accurately based on income, expenses, applicable deductions and current tax regulations.",
    },
    {
        number: "04",
        title: "Tax Payments Handling",
        description:
            "Get assistance with managing tax payments, calculating payable amounts and ensuring timely settlement of tax obligations.",
    },
    {
        number: "05",
        title: "Tax Returns Filing",
        description:
            "Prepare and file accurate tax returns with support for documentation, calculations and relevant tax compliance requirements.",
    },
    {
        number: "06",
        title: "VAT Registration Certificate",
        description:
            "Get assistance with VAT registration, required documentation and the application process to obtain your VAT registration certificate.",
    },
    {
        number: "07",
        title: "PAYE / APIT / WHT / SSCL Works",
        description:
            "Manage PAYE, APIT, Withholding Tax and SSCL requirements with professional calculation, documentation and compliance support.",
    },
    {
        number: "08",
        title: "Temporary VAT Registration Certificate",
        description:
            "Get support with temporary VAT registration applications, required documentation and the process of obtaining your certificate.",
    },
    {
        number: "09",
        title: "TIN Registration Certificate",
        description:
            "Register for a Taxpayer Identification Number (TIN) with assistance throughout the application process and required documentation.",
    },
    {
        number: "10",
        title: "Income Tax Registration",
        description:
            "Complete your income tax registration with guidance on application requirements, documentation and relevant tax obligations.",
    },
    {
        number: "11",
        title: "Customs Registration",
        description:
            "Get assistance with customs registration, required documentation and registration procedures for import and export activities.",
    },
    {
        number: "12",
        title: "Private Limited Company Income Tax Works",
        description:
            "Manage income tax requirements for private limited companies, including tax computations, returns preparation and compliance support.",
    },
    {
        number: "13",
        title: "Personal Income Tax Works",
        description:
            "Get professional assistance with personal income tax calculations, tax return preparation, filing and individual tax compliance.",
    },
];

const secretarialServices = [
    {
        number: "01",
        title: "New Company Registration",
        description:
            "Register your new company with professional guidance throughout the registration process, required documentation and legal formalities.",
    },
    {
        number: "02",
        title: "New Business Registration",
        description:
            "Get your new business officially registered with assistance in preparing documents and completing the necessary registration procedures.",
    },
    {
        number: "03",
        title: "Company Incorporation",
        description:
            "Establish your company as a legal entity with support for incorporation procedures, statutory requirements and essential documentation.",
    },
    {
        number: "04",
        title: "Company Secretarial Services",
        description:
            "Maintain your company's statutory records and compliance requirements with professional secretarial support, documentation and corporate administration.",
    },
    {
        number: "05",
        title: "New BRC Works",
        description:
            "Get assistance with obtaining a new Business Registration Certificate (BRC), including application preparation and required documentation.",
    },
];

export default function Services() {
    return (<>
        <div id="sevice-hero-heading" className={styles.heading}>
            <p className={styles.headingParagrapgh}>
                Everything Your Business Needs to Move Forward <br /></p>
<p className={styles.headingSubParagrapgh}>From essential business services to operational support, we bring everything together to simplify processes, maintain compliance, and drive business success.
            </p>
        </div>
        <p className={styles.eyebrow}>Accounting Services</p>
        <main className={styles.valueGrid}>

            {accountingServices.map((service) => (
                <div key={service.number}>
                    <article className={styles.missionCard}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                </div>
            ))}
        </main >
        
        <p className={styles.eyebrow}>Tax Consultancy Services</p>
        <main className={styles.valueGrid}>

            {taxServices.map((service) => (
                <div key={service.number}>
                    <article className={styles.missionCard}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                </div>
            ))}
        </main ><a className={styles.arrowLink} href="#sevice-hero-heading">
        <img className={styles.arrow} src="/arrow.png" alt="arrow" />
      </a>
        <p className={styles.eyebrow}>Company Secretarial Services</p>
        <main className={styles.valueGrid}>

            {secretarialServices.map((service) => (
                <div key={service.number}>
                    <article className={styles.missionCard}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                </div>
            ))}
        </main >
    </>
    );
}

