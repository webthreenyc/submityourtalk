import type { NextPage } from "next";
import Head from "next/head";
import css from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={css.container}>
      <Head>
        <title>webthree.nyc</title>
        <meta name="description" content="NYC's web3 developer meetup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={`container ${css.navigation}`}>
          <div className={css.logo}>
            <h1>Logo</h1>
          </div>
          <a className={css.about}>about</a>
          <a className={css.speakers}>speakers</a>
          <a className={css.sponsors}>sponsors</a>
          <a className={css.next_event}>next event</a>
          <a className={css.tickets}>tickets</a>
        </nav>
      </header>
      <main className={`container ${css.body}`}>
        <section className={css.hero_content}>
          <h1>webthree.nyc</h1>
          <h4>technical talks for engineers building web3</h4>
        </section>
        <div className={css.hero_image}>
          <img src="https://placekitten.com/600/650" alt="big paralax image" />
        </div>

        <h2 className={css.sponsorsHeader}>Sponsors</h2>
        <section className={css.sponsor_container}>
          <article className={css.one_sponsor}>
            <h3>Unstoppable Domains</h3>
            <img src="https://placekitten.com/250/250" alt="logo" />
            <p>
              Lo-fi crucifix mumblecore, hexagon shoreditch swag vinyl austin
              skateboard lyft keytar gastropub yr fanny pack plaid. IPhone
              drinking vinegar tumeric vinyl ugh hexagon. +1 cardigan DIY
              pickled. Next level sartorial dreamcatcher, waistcoat swag banh mi
              yr shabby chic pabst ennui you probably haven't heard of them.
            </p>
          </article>
          <article className={css.two_sponsor}>
            <h3>Comm</h3>
            <img src="https://placekitten.com/250/250" alt="logo" />
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
            <h3>Web3 Corp</h3>
            <img src="https://placekitten.com/250/250" alt="logo" />
            <p>
              Polaroid cold-pressed street art truffaut pop-up tousled. Occupy
              kombucha paleo, ethical craft beer squid actually iceland
              meditation brunch gentrify. Cardigan readymade gochujang
              post-ironic pabst. Chicharrones tousled vegan craft beer hammock.
              You probably haven't heard of them sartorial locavore, chia
              flexitarian synth celiac cold-pressed.
            </p>
          </article>
        </section>

        <h2 className={css.speakers_header}>Speakers</h2>

        <article className={css.speaker_one}>
          <img src="https://placekitten.com/150/150" alt="" />
          <h3>Ashoat Tevosyan</h3>
          <h4>Talk: keyservers and you</h4>
          <p>
            I'm baby poke tattooed fingerstache ethical sustainable cronut
            salvia semiotics sartorial lomo schlitz 3 wolf moon keffiyeh
            pinterest. Actually everyday carry selvage poutine. Church-key
            shoreditch keytar hashtag vape fixie chartreuse, mixtape VHS
            actually gentrify meh lo-fi ugh. Beard pinterest butcher, pabst
            meggings street art waistcoat lo-fi. Pok pok aesthetic microdosing
            kickstarter street art, hot chicken truffaut. Kombucha flannel
            farm-to-table, tbh shoreditch austin fingerstache poke migas
            truffaut readymade gentrify.
          </p>
        </article>

        <article className={css.speaker_two}>
          <img src="https://placekitten.com/150/150" alt="" />
          <h3>Atul Madhugiri</h3>
          <h4>Talk: Moving comm's threading model to C++ and SQL Lite</h4>
          <p>
            Salvia yuccie hashtag kinfolk tattooed pork belly. Jean shorts
            street art hoodie cray, bushwick put a bird on it tumblr synth.
            Readymade lumbersexual kombucha copper mug scenester, +1 mlkshk
            crucifix 90's. XOXO cloud bread franzen, celiac marfa ugh plaid
            aesthetic readymade pork belly pabst gastropub lyft gentrify
            tumeric.
          </p>
          <p>
            Cornhole marfa health goth, messenger bag narwhal actually DIY
            shaman next level lo-fi. Kinfolk next level tumblr, typewriter
            cold-pressed plaid taiyaki iceland viral hexagon farm-to-table. Af
            cray 3 wolf moon health goth. Tofu iPhone jianbing next level
            poutine succulents.
          </p>
        </article>

        <article className={css.speaker_three}>
          <img src="https://placekitten.com/150/150" alt="" />
          <h3>Benjamin Schachter</h3>
          <h4>Talk: Why you should marry your JPEG, and how to do it</h4>
          <p>
            I'm baby la croix paleo master cleanse butcher activated charcoal
            poutine DIY enamel pin. Gastropub roof party cliche gluten-free next
            level. Green juice aesthetic before they sold out brunch, organic
            man braid fanny pack farm-to-table 8-bit man bun neutra lomo tacos
            air plant. Lyft 8-bit ethical messenger bag palo santo four loko
            street art listicle swag cray williamsburg selvage glossier. Echo
            park flannel messenger bag sartorial before they sold out.
          </p>
        </article>

        <article className={css.speaker_four}>
          <img src="https://placekitten.com/150/150" alt="" />
          <h3>You!</h3>
          <h4>Talk: We'd love to hear what you're working on!</h4>
          <p>Go to our github and open an issue.</p>
        </article>

        <h3 className={css.ticketHeader}>Tickets</h3>
        <div className={css.ticketInfo}>
          <h4>Price: $10</h4>
          <p>We charge $10 per ticket to ensure people who register show up</p>
          <p>All proceeds go to a 501-c-3 non-for-profit</p>
        </div>
      </main>
      <footer className={`container ${css.footer}`}>
        <p className={css.conduct}>
          webthree.nyc expects all speakers and attendees to follow the{" "}
          <a href="https://jsconf.com/codeofconduct.html">
            JSConf code of conduct
          </a>{" "}
          and the{" "}
          <a href="https://www.recurse.com/social-rules">RC Social Rules</a>
        </p>
        <div className={css.more_info}>
          <p>More information on</p>
          <ul>
            <li>Speakers</li>
            <li>attendees</li>
            <li>sponsors</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
