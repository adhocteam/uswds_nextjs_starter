import Head from "next/head";
import Script from "next/script";
import Header from "../components/header";
import Hero from "../components/hero";
import Tagline from "../components/tagline";
import GridContainer from "../components/gridContainer";
import Intro from "../components/intro";
import Footer from "../components/footer";
import Nav from "../components/nav";

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
