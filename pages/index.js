import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Swal from "sweetalert2";

// data
import skillsData from "../data/skills";
import projects from "../data/projects";

// components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
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
    // scroll reveal
    sr.reveal(".sub", {});
    sr.reveal(".para", { delay: 400 });
    sr.reveal(".aboutImg", { delay: 400 });
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
        if (res.status === 200) {
          setSubmitted(true);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) =>
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed!",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  return (
    <>
      <Head>
        <title>Shahriar Swim</title>
        <link rel="icon" href="/favicon.ico" />
        {/* scripts - typewriter & scrollreveal */}
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
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
              <button className={styles.contact__button} type="submit">
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
