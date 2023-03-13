import Head from "next/head";
import Script from "next/script";
import Link from 'next/link'
import Header from '../components/Header'
import Hero from "../components/hero";
import Tagline from "../components/tagline";
import GridContainer from "../components/gridContainer";
import Intro from "../components/intro";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Banner from '../components/banner'

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
      <Header>
        <Banner />
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="-logo">
              <em className="usa-logo__text">
                <Link href="/" title="USWDS Starter Project">
                  The Ad Hoc{" "}
                  <abbr title="United States Web Design System">USWDS</abbr>{" "}
                  Starter Template
                </Link>
              </em>
            </div>
          </div>
        </div>        
      </Header>
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
