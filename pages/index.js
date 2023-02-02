import Head from "next/head";
import Script from "next/script";
import Banner from "../components/banner";
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

      <Banner />
      {/* XXX: The template image on the docs page
        (https://designsystem.digital.gov/templates/landing-page/) shows a
        search bar here but the code for it isn't present in the box below the
        image */}
      <Header />
      <main>
        <Hero />
        <Tagline />
        <GridContainer />
        <Intro />
      </main>
      <Footer />
      <Nav />

      {/* The purpose of this script is to prevent flash of uninitialized
        content, so load it before interactive.
        XXX: I cannot at all figure out why this script isn't getting loaded! */}
      <Script src="assets/js/uswds-init.min.js" strategy="beforeInteractive" />
      <Script src="assets/js/uswds.min.js" />
    </div>
  );
}
