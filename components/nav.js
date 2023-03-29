import Masthead from "./masthead";

export default function Nav() {
  return (
    <div className="usa-identifier">
      <Masthead />
      <nav
        className="usa-identifier__section usa-identifier__section--required-links"
        aria-label="Important links"
      >
        <div className="usa-identifier__container">
          <ul className="usa-identifier__required-links-list">
            <li className="usa-identifier__required-links-item">
              <a href="#" className="usa-identifier__required-link usa-link">
                About &lt;Parent shortname&gt;
              </a>
            </li>
            <li className="usa-identifier__required-links-item">
              <a href="" className="usa-identifier__required-link usa-link">
                Accessibility support
              </a>
            </li>
            <li className="usa-identifier__required-links-item">
              <a href="" className="usa-identifier__required-link usa-link">
                FOIA requests
              </a>
            </li>
            <li className="usa-identifier__required-links-item">
              <a href="" className="usa-identifier__required-link usa-link">
                No FEAR Act data
              </a>
            </li>
            <li className="usa-identifier__required-links-item">
              <a href="" className="usa-identifier__required-link usa-link">
                Office of the Inspector General
              </a>
            </li>
            <li className="usa-identifier__required-links-item">
              <a href="" className="usa-identifier__required-link usa-link">
                Performance reports
              </a>
            </li>
            <li className="usa-identifier__required-links-item">
              <a href="" className="usa-identifier__required-link usa-link">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section
        className="usa-identifier__section usa-identifier__section--usagov"
        aria-label="U.S. government information and services"
      >
        <div className="usa-identifier__container">
          <div className="usa-identifier__usagov-description">
            Looking for U.S. government information and services?
          </div>
          &nbsp;
          <a href="https://www.usa.gov/" className="usa-link">
            Visit USA.gov
          </a>
        </div>
      </section>
    </div>
  );
}
