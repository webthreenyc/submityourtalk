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
              The only requirement to give a talk is what&#39;s being presented
              is:
            </p>
            <ul>
              <li>
                <p>
                  Interfaces with a decentralized technology. Examples include
                  IPFS, Arweave, Solana, Uniswap, a Dune.xyz dashboard you
                  built, a subgraph you authored, etc.
                </p>
              </li>
              <li>
                <p>
                  Describes mechanics of web3 actions / technologies. Examples,
                  how MEV works, a new quadratic bonding curve implementation,
                  what a ZK-rollup does.
                </p>
              </li>
              <li>
                <p>
                  Is a decentralized technology. Examples, you wrote a
                  blockchain, rollup or system that decentralizes data from a
                  centralized source.
                </p>
              </li>
            </ul>
            <p>
              That could be a blockchain, keyserver, IPFS node or something that
              you&#39;ve created.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
