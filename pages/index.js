import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// data
import skillsData from "../data/skills";
import projects from "../data/projects";

// components
import Header from "../components/Header/Header";
import SkillItem from "../components/SkillItem/SkillItem";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

// styles
import styles from "../styles/pages/Home.module.scss";
import Card from "../components/Card";
import InputField from "../components/InputField";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { languages, frontend, backend, others } = skillsData;
  // contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submmitted, setSubmitted] = useState(true);

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
      distance: "20px",
      duration: 2000,
      reset: true,
    });

    // hero
    sr.reveal(".title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".img", { delay: 400 });
    sr.reveal(".icon", { interval: 250 });

    // about
    sr.reveal(".sub", {});
    sr.reveal(".para", { delay: 400 });
    sr.reveal(".aboutImg", { delay: 400 });

    // contact
    sr.reveal(".contactBtn", {});
  }, []);

  // typewriter
  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: "Software Developer",
      autoStart: true,
      loop: true,
      pauseFor: 3000,
    });
  }, []);

  // contact
  const contactSubmitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    const data = {
      name,
      email,
      subject,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setSubmitted(true);

        if (res.status === 200) {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        setSubmitted(true);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <>
      <Head>
        <title>S. M. Shahriar</title>
        <link rel="icon" type="image/png" href="/manlaptop.png" />
        {/* tag for social media */}
        <meta property="og:title" content="S. M. Shahriar - Portfolio" />
        <meta
          property="og:description"
          content="A personal site to showcase projects and skills."
        />
        <meta
          property="og:image"
          content="https://swimshahriar.vercel.app/shahriar.png"
        />
        <meta property="og:url" content="https://swimshahriar.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* scripts - typewriter & scrollreveal */}
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <script src="https://unpkg.com/scrollreveal"></script>
      </Head>

      <Header />

      <main>
        {/* <Hero isMobile={isMobile} /> */}
        {/* hero */}
        <section className={styles.hero + " sectionStyle"} id="home">
          <div className={styles.hero__img + " img"}>
            <Image
              src="/shahriar.png"
              alt="shahriar"
              width={isMobile ? 550 : 700}
              height={isMobile ? 380 : 500}
            />
          </div>

          <div className={styles.hero__data}>
            <h1 className={styles.hero__title + " title"}>
              Hi 👋 <br /> I'am{" "}
              <span className={styles.hero__titleColor}>Shahriar</span>
              <br />
              <span id="typewriter"></span>
            </h1>
            <Link href="/#contact">
              <a className={styles.hero__button + " button"}>
                <MdEmail />
                <p>Contact</p>
              </a>
            </Link>

            <div className={styles.hero__social}>
              <a
                href="https://www.linkedin.com/in/swimshahriar/"
                target="_blank"
                className={styles.hero__socialIcon + " icon"}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.twitter.com/swimshahriar"
                target="_blank"
                className={styles.hero__socialIcon + " icon"}
              >
                <FaTwitter />
              </a>
              <a
                href="https://stackoverflow.com/users/12624145/swimshahriar"
                target="_blank"
                className={styles.hero__socialIcon + " icon"}
              >
                <FaStackOverflow />
              </a>
              <a
                href="https://www.github.com/swimshahriar"
                target="_blank"
                className={styles.hero__socialIcon + " icon"}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </section>

        {/* about */}
        <section className={styles.about + " section"} id="about">
          <h2 className="sectionTitle">About</h2>

          <div className={styles.about__container + " sectionStyle"}>
            <div className={styles.about__details}>
              <h2 className={styles.about__subtitle + " sub"}>
                S. M. Shahriar
              </h2>
              <p className={styles.about__text + " para"}>
                As a tech enthusiast I am learning new technologies every day.
                It keeps me motivated towards my work. My interest areas are{" "}
                <span>Software Development</span> and{" "}
                <span>Machine Learning.</span>
              </p>
            </div>
            <div className={styles.about__img + " aboutImg"}>
              <Image
                src="/manlaptop.png"
                alt="man with laptop"
                width={isMobile ? 300 : 500}
                height={isMobile ? 300 : 500}
              />
            </div>
          </div>
        </section>

        {/* skills */}
        <section className={styles.skills + "  section"} id="skills">
          <h2 className="sectionTitle">Skills</h2>

          <div className={styles.skills__container + " sectionStyle"}>
            <div className={styles.skills__frontend}>
              <h4 className={styles.skills__title}>{frontend.title}</h4>
              <div className={styles.skills__list}>
                {frontend.lists.map((item, index) => {
                  return (
                    <SkillItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>

            <div className={styles.skills__backend}>
              <h4 className={styles.skills__title}>{backend.title}</h4>
              <div className={styles.skills__list}>
                {backend.lists.map((item, index) => {
                  return (
                    <SkillItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>

            <div className={styles.skills__languages}>
              <h4 className={styles.skills__title}>{languages.title}</h4>
              <div className={styles.skills__list}>
                {languages.lists.map((item, index) => {
                  return (
                    <SkillItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>

            <div className={styles.skills__others}>
              <h4 className={styles.skills__title}>{others.title}</h4>
              <div className={styles.skills__list}>
                {others.lists.map((item, index) => {
                  return (
                    <SkillItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* projects */}
        <section
          className={styles.projects + " section sectionStyle"}
          id="projects"
        >
          <h2 className="sectionTitle">Projects</h2>

          <div className={styles.projects__list}>
            {projects.map((project, index) => (
              <Card
                key={index}
                img={project.img}
                alt={project.alt}
                title={project.title}
                tech={project.tech}
                desc={project.desc}
                liveUrl={project.liveUrl}
                github={project.github}
              />
            ))}
          </div>

          <a
            className={styles.projects__btn + " button"}
            href="https://github.com/swimshahriar"
            target="_blank"
          >
            See More
          </a>
        </section>

        {/* contact */}
        <section
          className={styles.contact + " section sectionStyle"}
          id="contact"
        >
          <h2 className="sectionTitle">Contact</h2>
          <form
            className={styles.contact__form}
            onSubmit={contactSubmitHandler}
          >
            <InputField
              placeholder="your name"
              required={true}
              id="name"
              title="Name"
              value={name}
              setValue={setName}
            />
            <InputField
              type="email"
              placeholder="your email"
              required={true}
              id="email"
              title="Email"
              value={email}
              setValue={setEmail}
            />
            <InputField
              type="text"
              placeholder="your subject"
              required={true}
              id="subject"
              title="Subject"
              value={subject}
              setValue={setSubject}
            />
            <InputField
              type="textarea"
              placeholder="your message"
              required={true}
              id="message"
              title="Message"
              value={message}
              setValue={setMessage}
            />
            {!submmitted ? (
              <Loader />
            ) : (
              <button
                className={styles.contact__button + " contactBtn"}
                type="submit"
              >
                Send
              </button>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
