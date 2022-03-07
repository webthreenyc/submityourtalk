/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer.component";
import { Navigation } from "../components/Navigation.component";
import css from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={css.container}>
      <Head>
        <title>webthree.nyc</title>
        <meta name="description" content="NYC's web3 developer meetup" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Angkor&family=Inter:wght@400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Angkor&family=Inter:wght@400;500;600&display=swap"
          media="print"
          // @ts-expect-error
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Angkor&family=Inter:wght@400;500;600&display=swap"
          />
        </noscript>
      </Head>
      <Navigation />
      <main className={`container ${css.body}`}>
        <div className={css.hero}>
          <section className={css.hero_content}>
            <h1>webthree.nyc</h1>
            <h3>technical talks for engineers building web3</h3>
            <h4>January 27, 2022</h4>
          </section>
          <div className={css.hero_image}>
            <h1 className={css.logo}>3</h1>
          </div>
        </div>

        <h2 className={css.sponsorsHeader}>Sponsors</h2>
        <section className={css.sponsor_container}>
          <article className={css.one_sponsor}>
            <img src="https://placekitten.com/250/250" alt="logo" />
            <h3>Unstoppable Domains</h3>
            <p>
              Lo-fi crucifix mumblecore, hexagon shoreditch swag vinyl austin
              skateboard lyft keytar gastropub yr fanny pack plaid. IPhone
              drinking vinegar tumeric vinyl ugh hexagon. +1 cardigan DIY
              pickled. Next level sartorial dreamcatcher, waistcoat swag banh mi
              yr shabby chic pabst ennui you probably haven&#39;t heard of them.
            </p>
          </article>
          <article className={css.two_sponsor}>
            <img src="https://placekitten.com/250/250" alt="logo" />
            <h3>Comm</h3>
            <p>
              Everyday carry DIY tbh, hot chicken forage iceland biodiesel pug
              enamel pin sustainable poutine etsy bitters bespoke. Polaroid VHS
              chillwave beard. Occupy put a bird on it polaroid, man braid
              literally coloring book distillery adaptogen readymade vice
              tousled celiac viral shoreditch. Fashion axe locavore poutine
              whatever chicharrones intelligentsia small batch.
            </p>
          </article>
          <article className={css.three_sponsor}>
            <img src="https://placekitten.com/250/250" alt="logo" />
            <p>
              <h3>Web3 Corp</h3>
              Polaroid cold-pressed street art truffaut pop-up tousled. Occupy
              kombucha paleo, ethical craft beer squid actually iceland
              meditation brunch gentrify. Cardigan readymade gochujang
              post-ironic pabst. Chicharrones tousled vegan craft beer hammock.
              You probably haven&#39;t heard of them sartorial locavore, chia
              flexitarian synth celiac cold-pressed.
            </p>
          </article>
        </section>

        <h2 className={css.speakers_header}>Speakers</h2>

        <article className={css.speaker_one}>
          <img src="https://placekitten.com/150/150" alt="" />
          <h3>You!</h3>
          <h4>Talk: We&#39;d love to hear what you&#39;re working on!</h4>
          <p>Go to our github and open an issue.</p>
        </article>

        <article className={css.speaker_two}>
          <img src="https://placekitten.com/150/150" alt="" />
          <h3>You!</h3>
          <h4>Talk: We&#39;d love to hear what you&#39;re working on!</h4>
          <p>Go to our github and open an issue.</p>
        </article>

        <article className={css.speaker_three}>
          <img src="https://placekitten.com/150/150" alt="" />
          <h3>You!</h3>
          <h4>Talk: We&#39;d love to hear what you&#39;re working on!</h4>
          <p>Go to our github and open an issue.</p>
        </article>

        <article className={css.speaker_four}>
          <img src="https://placekitten.com/150/150" alt="" />
          <h3>You!</h3>
          <h4>Talk: We&#39;d love to hear what you&#39;re working on!</h4>
          <p>Go to our github and open an issue.</p>
        </article>

        <h3 className={css.ticketHeader}>Tickets</h3>
        <div className={css.ticketInfo}>
          <p>
            webthree.nyc starts at 7pm and includes community-curated lightning
            talks, food, and a post-talk hangout.
          </p>
          <p>Admission is $10.</p>
          <p>
            All remaining money is donated to amazing charities that share our
            values.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
