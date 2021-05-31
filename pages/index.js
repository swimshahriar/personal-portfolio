import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

// components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

// styles
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const onResizeHandler = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.onresize = onResizeHandler;
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    // scroll reveal
    sr.reveal(".sub", {});
    sr.reveal(".para", { delay: 400 });
    sr.reveal(".aboutImg", { delay: 400 });
  }, []);

  return (
    <>
      <Head>
        <title>Shahriar Swim</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/scrollreveal"></script>
      </Head>

      <Header />

      <main>
        <Hero isMobile={isMobile} />

        {/* about */}
        <section className={styles.about + " section"} id="about">
          <h2 className="sectionTitle">About</h2>

          <div className={styles.about__container + " sectionStyle"}>
            <div className={styles.about__details}>
              <h2 className={styles.about__subtitle + " sub"}>
                I'am S. M. Shahriar
              </h2>
              <p className={styles.about__text + " para"}>
                A Computer Science and Engineering student. As a computer
                science student and also as a tech enthusiast I am learning new
                technologies every day. My interest areas are{" "}
                <span>Machine Learning</span> and{" "}
                <span>Software Development.</span>
              </p>
            </div>
            <div className={styles.about__img + " aboutImg"}>
              <Image
                src="/shahriar.png"
                alt="shahriar"
                width={isMobile ? 550 : 700}
                height={isMobile ? 380 : 500}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
