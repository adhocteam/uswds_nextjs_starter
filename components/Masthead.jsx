import Image from "next/image";
import circle from "/public/uswds/img/circle-gray-20.svg";

export default function Masthead() {
  return (
    <section
      className="usa-identifier__section usa-identifier__section--masthead"
      aria-label="Agency identifier"
    >
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <a href="#" className="usa-identifier__logo">
            <Image
              className="usa-identifier__logo-img"
              src={circle}
              alt="&lt;Parent agency&gt; logo"
              role="img"
            />
          </a>
        </div>
        <section
          className="usa-identifier__identity"
          aria-label="Agency description"
        >
          <p className="usa-identifier__identity-domain">domain.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            An official website of the <a href="">&lt;Parent agency&gt;</a>
          </p>
        </section>
      </div>
    </section>
  );
}
