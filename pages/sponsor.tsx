import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer.component";
import { Navigation } from "../components/Navigation.component";
import css from "../styles/Sponsor.module.css";

const Sponsors: NextPage = () => {
  return (
    <div className={css.container}>
      <Head>
        <title>webthree.nyc</title>
        <meta name="description" content="NYC's web3 developer meetup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={`container ${css.body}`}>
        <h2 className={css.sponsorHeader}>sponsor webthree.nyc events</h2>

        <article className={css.sponsorContent}>
          <h5 className={css.credit}>
            Credit BrooklynJS:{" "}
            <a href="http://brooklynjs.com/sponsorship.html">
              sponsorship page
            </a>
          </h5>

          <h3>What&#39;s webthree.nyc?</h3>
          <p>
            On the last Thursday of every month, the local web3 community meets
            up to talk about web3 technology and what we&#39;re building.
          </p>
          <p>
            webthree.nyc starts at 7pm and includes community-curated lightning
            talks, food, and a post-talk hangout.
          </p>

          <p>Admission is $10. All proceeds go to charity.</p>
          <p>
            webthree.nyc was started and organized by
            <a href="https://twitter.com/benschac">Benjamin Schachter</a>.
          </p>

          <p>
            We&#39;re currently looking for 3 co-organizers. Please reach out to{" "}
            <a href="">ben@webthree.nyc</a> if you&#39;d like to become an
            organizer.
          </p>

          <h3>Sponsorship</h3>
          <div className={css.packages}>
            <p> Sponsorship is $400 per event</p>
          </div>
          <strong>What does a sponsorship get?</strong>
          <ul>
            <li>Two minutes of stage time to talk about your company.</li>
            <li>talk to attendees in a casual setting.</li>
            <li>Two tickets for engineers at your company.</li>
            <li>
              A table setup right by check-in for you to lay down some swag and
              mingle with our attendees.
            </li>
            <li>
              We&#39;ll tweet about you the week of the event. Let us know what
              you want us to tell folks about! We&#39;ll also list you on our
              website.
            </li>
          </ul>

          <strong>How do I buy a sponsorship ticket?</strong>
          <p>
            You can purchase sponsorship by sending an email to{" "}
            <a href="mailto:ben@webthree.nyc">ben@webthree.nyc</a>.
          </p>
          <strong>Where does the sponsorship money go?</strong>
          <p>
            After every meetup, we donate all remaining money to amazing
            organizations that share our values, such as{" "}
            <a href="https://freeCodeCamp.org/">freeCodeCamp</a>. Our budget is
            entirely transparent and can be found on our{" "}
            <a href="https://github.com/brooklynjs/brooklynjs.github.io/blob/master/budget.js">
              Github repository&#39;s budget file
            </a>
            .
          </p>
          <strong>How many other sponsors will there be?</strong>
          <p>
            Each event will have up to three sponsors, all of who are given
            equal branding at the event. There are no tiered sponsorship
            packages.
          </p>
          <strong>
            There are no sponsorships left this month. Can we sponsor next
            month?
          </strong>
          <p>
            Yes! Send an email to{" "}
            <a href="mailto:ben@webthree.nyc">ben@webthree.nyc</a> and we&#39;ll
            be happy to get you set-up for the next available month.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you&#39;re interested in sponsoring webthree.nyc, reach out to{" "}
            <a href="mailto:ben@webthree.nyc">ben@webthree.nyc</a> and we&#39;ll
            be happy to help you out.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;
