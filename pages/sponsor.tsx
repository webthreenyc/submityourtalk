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

        <h5 className={css.credit}>
          Credit BrooklynJS:{" "}
          <a href="http://brooklynjs.com/sponsorship.html">sponsorship page</a>
        </h5>

        <article className={css.sponsorContent}>
          <h3>What's webthree.nyc</h3>
          <p>
            On the last Thursday of every month, the local web3 community meets
            up to talk technology and what we're building.
          </p>
          <p>
            webthree.nyc starts at 7pm and includes community-curated lightning
            talks, food and a post-talk hangout.
          </p>

          <p>Admission is $10. All proceeds go to charity</p>

          <p>
            webthree.nyc was started by
            <a href="https://twitter.com/benschac">Benjamin Schachter</a>
          </p>

          <p>
            webthree.nyc is organized by
            <a href="https://twitter.com/benschac">Benjamin Schachter</a>
          </p>

          <p>We're currently looking for 3 co-organizers</p>

          <h3>Sponsorship Packages</h3>
          <ul className={css.sponsorship_packages}>
            <li>
              <div className={css.packages}>
                <h3>$300</h3>
                <p>1 event</p>
                <p>Full Price</p>
              </div>
            </li>
            <li>
              <div className={css.packages}>
                <h3>$2,430</h3>
                <p>3 events</p>
                <p>Save 10%</p>
              </div>
            </li>
          </ul>
          <p>What's a sponsorship get?</p>
          <ul>
            <li>Two minutes of stage time to talk about your company.</li>
            <li>talk to attendees in a casual setting.</li>
            <li>Two tickets for engineers at your company.</li>
            <li>
              A table setup right by check-in for you to lay down some swag and
              mingle with our attendees.
            </li>
            <li>
              We'll tweet about you the week of the event. Let us know what you
              want us to tell folks about! We'll also list you on webthree.nyc
            </li>
          </ul>

          <strong>How do I buy a sponsorship ticket?</strong>
          <p>
            You can purchase sponsorship tickets through our normal ticketing
            page. We encourage all potential sponsors to reach out before buying
            their tickets so we can ensure that sponsorship is the best fit for
            all parties involved. You can do so by sending an email to{" "}
            <a href="mailto:b@webthree.nyc">b@webthree.nyc</a>.
          </p>
          <strong>Where does the sponsorship money go?</strong>
          <p>
            After every meetup we donate all remaining money to amazing
            organizations that share our values, like{" "}
            <a href="https://freeCodeCamp.org/">freeCodeCamp</a>. Our budget is
            entirely transparent and can all be found on our{" "}
            <a href="https://github.com/brooklynjs/brooklynjs.github.io/blob/master/budget.js">
              Github repository's budget file
            </a>
            .
          </p>
          <strong>How many other sponsors will there be?</strong>
          <p>
            Each event we have three sponsors, all of who are given equal
            branding at our events. There are no tiered sponsorship packages.
          </p>
          <strong>
            There are no sponsorships left this month. Can we sponsor next
            month?
          </strong>
          <p>
            Yes! Send an email to{" "}
            <a href="mailto:b@webthree.nyc">b@webthree.nyc</a> and we'll be
            happy to get you setup for the next available month.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you're interested in sponsoring webthree.nyc reach out to{" "}
            <a href="mailto:b@webthree.nyc">b@webthree.nyc</a> and we'll be
            happy to help you out.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;
