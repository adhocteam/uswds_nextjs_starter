import Link from "next/link";

export default function Footer() {
  return (
    <footer className="usa-footer">
      <div className="grid-container usa-footer__return-to-top">
        <Link href="#">Return to top</Link>
      </div>
      <div className="usa-footer__primary-section">
        <nav className="usa-footer__nav" aria-label="Footer navigation">
          <ul className="grid-row grid-gap">
            <li
              className="
              mobile-lg:grid-col-4
              desktop:grid-col-auto
              usa-footer__primary-content
            "
            >
              <Link className="usa-footer__primary-link" href="/">
                &lt;Primary link&gt;
              </Link>
            </li>
            <li
              className="
              mobile-lg:grid-col-4
              desktop:grid-col-auto
              usa-footer__primary-content
            "
            >
              <Link className="usa-footer__primary-link" href="/">
                &lt;Primary link&gt;
              </Link>
            </li>
            <li
              className="
              mobile-lg:grid-col-4
              desktop:grid-col-auto
              usa-footer__primary-content
            "
            >
              <Link className="usa-footer__primary-link" href="/">
                &lt;Primary link&gt;
              </Link>
            </li>
            <li
              className="
              mobile-lg:grid-col-4
              desktop:grid-col-auto
              usa-footer__primary-content
            "
            >
              <Link className="usa-footer__primary-link" href="/">
                &lt;Primary link&gt;
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div
              className="
              usa-footer__logo
              grid-row
              mobile-lg:grid-col-6 mobile-lg:grid-gap-2
            "
            >
              <div className="mobile-lg:grid-col-auto">
                <img
                  className="usa-footer__logo-img"
                  src="/assets/img/logo-img.png"
                  alt=""
                />
              </div>
              <div className="mobile-lg:grid-col-auto">
                <p className="usa-footer__logo-heading">Name of Agency</p>
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <div className="usa-footer__social-links grid-row grid-gap-1">
                <div className="grid-col-auto">
                  <Link className="usa-social-link" href="/">
                    <img
                      className="usa-social-link__icon"
                      src="/assets/img/usa-icons/facebook.svg"
                      alt="Facebook"
                    />
                  </Link>
                </div>
                <div className="grid-col-auto">
                  <Link className="usa-social-link" href="/">
                    <img
                      className="usa-social-link__icon"
                      src="/assets/img/usa-icons/twitter.svg"
                      alt="Twitter"
                    />
                  </Link>
                </div>
                <div className="grid-col-auto">
                  <Link className="usa-social-link" href="/">
                    <img
                      className="usa-social-link__icon"
                      src="/assets/img/usa-icons/youtube.svg"
                      alt="YouTube"
                    />
                  </Link>
                </div>
                <div className="grid-col-auto">
                  <Link className="usa-social-link" href="/">
                    <img
                      className="usa-social-link__icon"
                      src="/assets/img/usa-icons/instagram.svg"
                      alt="Instagram"
                    />
                  </Link>
                </div>
                <div className="grid-col-auto">
                  <Link className="usa-social-link" href="/">
                    <img
                      className="usa-social-link__icon"
                      src="/assets/img/usa-icons/rss_feed.svg"
                      alt="RSS"
                    />
                  </Link>
                </div>
              </div>
              <p className="usa-footer__contact-heading">
                &lt;Agency Contact Center&gt;
              </p>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-auto">
                    <Link href="tel:1-800-555-5555">
                      &lt;(800) 555-GOVT&gt;
                    </Link>
                  </div>
                  <div className="grid-col-auto">
                    <Link href="mailto:info@agency.gov">
                      &lt;info@agency.gov&gt;
                    </Link>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
