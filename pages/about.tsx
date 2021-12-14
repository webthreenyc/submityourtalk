import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer.component";
import { Navigation } from "../components/Navigation.component";
import css from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <>
      <div className={css.container}>
        <Head>
          <title>webthree.nyc</title>
          <meta name="description" content="NYC's web3 developer meetup" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <main className={`container ${css.body}`}>
          <h3 className={css.aboutHeader}>About</h3>
          <section className={css.aboutInfo}>
            <p>
              webthree.nyc is a in real life (IRL) technical lightning talk
              event for engineers building in web3 that meets every other month.
              3 to 4 engineers give technical talks varying in size, scope and
              technical complexity. Talks range in length from 5 to 15 minutes
              in length.
            </p>
            <p>
              The only requirement to give a talk is what's being presented is
              interfacing with a decentralized technology, or is a decentralized
              technology.
            </p>
            <p>
              That could be a blockchain, keyserver, IPFS node or something that
              you've created.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
