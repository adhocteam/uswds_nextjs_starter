import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tagline from "../components/Tagline";
import GridContainer from "../components/GridContainer";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>USWDS prototype template</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* XXX: The template image on the docs page
        (https://designsystem.digital.gov/templates/landing-page/) shows a
        search bar here but the code for it isn't present in the box below the
        image */}
      <Header />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Tagline />
        <GridContainer />
        <Intro />
      </main>
      <Footer />
      <Nav />
      <Script src="uswds/js/uswds.min.js" />
    </div>
  );
}
