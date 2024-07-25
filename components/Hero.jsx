export default function Hero() {
  return (
    <section className="usa-hero" aria-label="Introduction">
      <div className="grid-container">
        <div className="usa-hero__callout usa-dark-background">
          <h1 className="usa-hero__heading">
            <span className="usa-hero__heading--alt">Ad Hoc Template</span>
            Making it easy to get started with a{" "}
            <abbr title="United States Web Design System">USWDS</abbr>-based
            static site
          </h1>
          <p>
            Clone{" "}
            <a
              href="https://github.com/adhocteam/uswds_nextjs_starter"
              className="usa-link usa-link--alt usa-link--external"
            >
              this repository
            </a>{" "}
            and get hacking on an accessible{" "}
            <abbr title="United States Web Design System">USWDS</abbr>-based
            site in no time
          </p>
          <a
            className="usa-button"
            href="https://github.com/adhocteam/uswds_nextjs_starter"
          >
            Visit the repository
          </a>
        </div>
      </div>
    </section>
  );
}
