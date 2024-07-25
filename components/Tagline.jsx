export default function Tagline() {
  return (
    <section className="grid-container usa-section">
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
            Get started in no time
          </h2>
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            The United States Web Design System starter template is designed to
            get you going with a USWDS and Next.js starter template as quickly
            and simply as possible so you can create a quick static prototype
            site or begin your work on a production site.
          </p>
          <p>
            Visit the{" "}
            <a
              href="https://github.com/adhocteam/uswds_nextjs_starter"
              className="usa-link usa-link--alt usa-link--external"
            >
              {" "}
              GitHub page
            </a>{" "}
            to join us and collaborate on making a better template, or just
            clone it and use it to get yourself under way as simply as possible.
          </p>
          <p>
            You can find more information about the USWDS at{" "}
            <a href="https://designsystem.digital.gov">their website</a> and{" "}
            <a href="https://github.com/uswds">their GitHub account</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
