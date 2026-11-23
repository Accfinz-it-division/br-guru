"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

const pageMetadata = {
  title: 'Business Registration & Corporate Services',
  description:
    'Explore business registration, company incorporation, tax consultancy and corporate secretarial services in Sri Lanka.',
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = pageMetadata.title;

    let description = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = pageMetadata.description;

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = new URL(pageMetadata.alternates.canonical, window.location.origin).href;
  }, []);

    useEffect(() => {
        const section = statsRef.current;
        if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                const counters = Array.from(section.querySelectorAll<HTMLElement>("[data-count]"));
                const duration = 1500;
                let frameId = 0;
                let startTime: number | null = null;

                counters.forEach((counter) => {
                    counter.textContent = `0${counter.dataset.suffix ?? ""}`;
                });

                const animate = (time: number) => {
                    startTime ??= time;
                    const progress = Math.min((time - startTime) / duration, 1);

                    counters.forEach((counter) => {
                        const target = Number(counter.dataset.count);
                        const value = Math.floor(target * progress);
                        counter.textContent = `${value}${counter.dataset.suffix ?? ""}`;
                    });

                    if (progress < 1) frameId = requestAnimationFrame(animate);
                };

                frameId = requestAnimationFrame(animate);
                return () => cancelAnimationFrame(frameId);
            }); observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const element = aboutRef.current;
        if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                element.animate(
                    [
                        { transform: "translateY(30px)", opacity: 0 },
                        { transform: "translateY(0)", opacity: 1 },
                    ],
                    { duration: 700, easing: "ease-out", fill: "both" },
                );
                observer.disconnect();
            },
            { threshold: 0.1 },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const imageElement = imageRef.current;
        if (!imageElement || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        imageElement.animate(
            [
                { opacity: 0 },
                { opacity: 1 },
            ],
            { duration: 1500, easing: "ease-in-out" },
        );
    }, []);
    const imageRef2 = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const imageElement = imageRef2.current;
        if (!imageElement || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        imageElement.animate(
            [
                { opacity: 0 },
                { opacity: 1 },
            ],
            { duration: 1500, easing: "ease-in-out" },
        );
    }, []);
    return (
        <main>
            <div>
                <img ref={imageRef2} className={styles.image} src="/company-01.jpg" alt="" />
                <img ref={imageRef} className={styles.imageMobile} src="/about-02.png" alt="" /><p className={styles.heading}>About Us</p>
                <div className={styles.background}>
                  
                <section id="about-hero-heading" ref={statsRef} className={styles.stats} aria-label="Company highlights">
                    {highlights.map((item) => (
                        <div key={item.label} className={styles.statCard}>
                            <span data-count={item.value.match(/^\d+/)?.[0]} data-suffix={item.value.match(/\D+$/)?.[0] ?? ""}>
                                {item.value}
                            </span>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </section>
                <div ref={aboutRef} className={styles.about}>
                    {/* <p className={styles.aboutheading}> */}
                    <p className={styles.eyebrow}>About BR Consultents</p>
                    {/* <em>About Us,</em> */}
                    {/* </p> */}
                    <p>
                        BR Consultents is a Sri Lanka based consultancy firm providing a wide range of business solutions
                        across the country. We offer personal, business & complany tax compliance services, business coaching,
                        business advisory and strategy development with major target to SMEs. We are Certified accountants
                        professionals more accessible and available than our peers in the same industry.
                    </p>

                </div>
                <a className={styles.arrowLink} href="#about-hero-heading">
        <img className={styles.arrow} src="/arrow.png" alt="arrow" />
      </a>
                <section className={styles.MissionandVision} aria-labelledby="mission-vision-title">
                    <div className={styles.missionHeading}>
                        <p className={styles.eyebrow}>What guides us</p>
                        <h2 id="mission-vision-title">A clear purpose. A vision for lasting growth.</h2>
                        <p>We make trusted business guidance more accessible for every stage of your journey.</p>
                    </div>

                    <div className={styles.missionGrid}>
                        <article className={styles.missionCard}>
                            <div className={styles.missionCardTop}>
                                <span className={styles.missionLabel}>Our mission</span>
                                <span className={styles.missionNumber} aria-hidden="true">01</span>
                            </div>
                            <h3>To make expert business support approachable, relevant, and results-driven.</h3>
                            <p>
                                We help clients manage compliance, planning, and growth challenges with practical advice
                                tailored to their goals and stage of business development.
                            </p>
                        </article>

                        <article className={`${styles.missionCard} ${styles.visionCard}`}>
                            <div className={styles.missionCardTop}>
                                <span className={styles.missionLabel}>Our vision</span>
                                <span className={styles.missionNumber} aria-hidden="true">02</span>
                            </div>
                            <h3>To be the trusted partner businesses rely on for sustainable growth.</h3>
                            <p>
                                We aim to empower entrepreneurs and SMEs across Sri Lanka with dependable,
                                forward-thinking guidance that strengthens long-term performance.
                            </p>
                        </article>
                    </div>
                </section>
                </div>
              </div>
            {/* </div> */}


            {/* <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About BR Consultents</p>
          <h1>Helping Sri Lankan businesses move forward with confidence.</h1>
          <p className={styles.lead}>
            BR Consultents is a Sri Lanka-based consultancy firm delivering business support,
            tax compliance, advisory services, and strategy development for individuals and SMEs
            who want practical guidance and dependable expertise.
          </p>

          <div className={styles.actions}>
            <a href="#mission" className={styles.primaryAction}>
              Discover our mission
            </a>
            <a href="#values" className={styles.secondaryAction}>
              Why choose us
            </a>
          </div>
        </div>

        <div className={styles.visualCard}>
          <img src="/header-page-01.jpeg" alt="BR Consultents team and office" />
          <div className={styles.overlayCard}>
            <span className={styles.smallLabel}>Professional support</span>
            <strong>Business growth with clarity</strong>
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label="Company highlights">
        {highlights.map((item) => (
          <div key={item.label} className={styles.statCard}>
            <span>{item.value}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className={styles.story} id="mission">
        <div className={styles.storyImageWrap}>
          <img src="/company.png" alt="Business consulting consultation" />
        </div>

        <div className={styles.storyContent}>
          <p className={styles.sectionEyebrow}>Who we are</p>
          <h2>Focused on practical solutions that create long-term value.</h2>
          <p>
            We work with businesses and individuals seeking dependable support in compliance,
            financial clarity, and strategic planning. Our approach is built around accessibility,
            responsiveness, and high standards from the first conversation to the final result.
          </p>
          <p>
            Whether you are launching a new venture, restructuring operations, or managing ongoing
            tax and business requirements, we bring clear guidance and a hands-on approach that helps
            you move with confidence.
          </p>

          <ul className={styles.checkList}>
            <li>Personal, business, and company tax compliance</li>
            <li>Business coaching and advisory support</li>
            <li>Strategic planning for sustainable growth</li>
          </ul>
        </div>
      </section>

      <section className={styles.missionSection} id="values">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Our promise</p>
          <h2>Mission, vision, and the values behind every engagement.</h2>
        </div>

        <div className={styles.missionGrid}>
          <article className={styles.missionCard}>
            <span>Mission</span>
            <h3>To make expert business support approachable, relevant, and results-driven.</h3>
            <p>
              We help clients manage compliance, planning, and growth challenges with practical advice
              tailored to their goals and stage of business development.
            </p>
          </article>

          <article className={styles.missionCard}>
            <span>Vision</span>
            <h3>To become the trusted partner businesses rely on for sustainable growth.</h3>
            <p>
              Our vision is to support entrepreneurs and SMEs across Sri Lanka with dependable,
              forward-thinking guidance that strengthens long-term performance.
            </p>
          </article>

          <article className={styles.missionCard}>
            <span>Values</span>
            <h3>Integrity, accessibility, and measurable impact in every recommendation.</h3>
            <p>
              We are committed to honest advice, responsive communication, and solutions designed to
              create practical value for our clients.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.valueGrid}>
        {values.map((value) => (
          <article key={value.title} className={styles.valueCard}>
            <div className={styles.iconWrap}>01</div>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </section> */}
        </main>
    );
}

// import styles from "./page.module.css";

const highlights = [
    { value: "10+", label: "Years of advisory experience" },
    { value: "500+", label: "Businesses supported" },
    { value: "100%", label: "Tailored strategy focus" },
];

// const values = [
//   {
//     title: "Trusted guidance",
//     text: "We simplify complex tax, compliance, and business decisions with clear, practical advice you can act on.",
//   },
//   {
//     title: "SME-first thinking",
//     text: "Our work is designed around the needs of growing businesses, founders, and professionals across Sri Lanka.",
//   },
//   {
//     title: "Integrity and clarity",
//     text: "We combine professional expertise with honest communication, so every recommendation is transparent and actionable.",
//   },
// ];

// export default function About() {
//   return (
//     <main className={styles.page}>
//       <section className={styles.hero}>
//         <div className={styles.heroContent}>
//           <p className={styles.eyebrow}>About BR Consultents</p>
//           <h1>Helping Sri Lankan businesses move forward with confidence.</h1>
//           <p className={styles.lead}>
//             BR Consultents is a Sri Lanka-based consultancy firm delivering business support,
//             tax compliance, advisory services, and strategy development for individuals and SMEs
//             who want practical guidance and dependable expertise.
//           </p>

//           <div className={styles.actions}>
//             <a href="#mission" className={styles.primaryAction}>
//               Discover our mission
//             </a>
//             <a href="#values" className={styles.secondaryAction}>
//               Why choose us
//             </a>
//           </div>
//         </div>

//         <div className={styles.visualCard}>
//           <img src="/header-page-01.jpeg" alt="BR Consultents team and office" />
//           <div className={styles.overlayCard}>
//             <span className={styles.smallLabel}>Professional support</span>
//             <strong>Business growth with clarity</strong>
//           </div>
//         </div>
//       </section>

//       <section className={styles.stats} aria-label="Company highlights">
//         {highlights.map((item) => (
//           <div key={item.label} className={styles.statCard}>
//             <span>{item.value}</span>
//             <p>{item.label}</p>
//           </div>
//         ))}
//       </section>

//       <section className={styles.story} id="mission">
//         <div className={styles.storyImageWrap}>
//           <img src="/company.png" alt="Business consulting consultation" />
//         </div>

//         <div className={styles.storyContent}>
//           <p className={styles.sectionEyebrow}>Who we are</p>
//           <h2>Focused on practical solutions that create long-term value.</h2>
//           <p>
//             We work with businesses and individuals seeking dependable support in compliance,
//             financial clarity, and strategic planning. Our approach is built around accessibility,
//             responsiveness, and high standards from the first conversation to the final result.
//           </p>
//           <p>
//             Whether you are launching a new venture, restructuring operations, or managing ongoing
//             tax and business requirements, we bring clear guidance and a hands-on approach that helps
//             you move with confidence.
//           </p>

//           <ul className={styles.checkList}>
//             <li>Personal, business, and company tax compliance</li>
//             <li>Business coaching and advisory support</li>
//             <li>Strategic planning for sustainable growth</li>
//           </ul>
//         </div>
//       </section>

//       <section className={styles.missionSection} id="values">
//         <div className={styles.sectionHeader}>
//           <p className={styles.sectionEyebrow}>Our promise</p>
//           <h2>Mission, vision, and the values behind every engagement.</h2>
//         </div>

//         <div className={styles.missionGrid}>
//           <article className={styles.missionCard}>
//             <span>Mission</span>
//             <h3>To make expert business support approachable, relevant, and results-driven.</h3>
//             <p>
//               We help clients manage compliance, planning, and growth challenges with practical advice
//               tailored to their goals and stage of business development.
//             </p>
//           </article>

//           <article className={styles.missionCard}>
//             <span>Vision</span>
//             <h3>To become the trusted partner businesses rely on for sustainable growth.</h3>
//             <p>
//               Our vision is to support entrepreneurs and SMEs across Sri Lanka with dependable,
//               forward-thinking guidance that strengthens long-term performance.
//             </p>
//           </article>

//           <article className={styles.missionCard}>
//             <span>Values</span>
//             <h3>Integrity, accessibility, and measurable impact in every recommendation.</h3>
//             <p>
//               We are committed to honest advice, responsive communication, and solutions designed to
//               create practical value for our clients.
//             </p>
//           </article>
//         </div>
//       </section>

//       <section className={styles.valueGrid}>
//         {values.map((value) => (
//           <article key={value.title} className={styles.valueCard}>
//             <div className={styles.iconWrap}>01</div>
//             <h3>{value.title}</h3>
//             <p>{value.text}</p>
//           </article>
//         ))}
//       </section>
//     </main>
//   );
// }
