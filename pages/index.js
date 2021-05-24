import Head from "next/head";

// components
import Header from "../components/Header/Header";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shahriar Swim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Portfolio</h1>
      </main>
    </div>
  );
}
