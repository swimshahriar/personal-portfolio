import Head from "next/head";

// components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

// styles
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shahriar Swim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
      </main>
    </>
  );
}
