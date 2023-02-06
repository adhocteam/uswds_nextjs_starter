import Link from "next/link";

import Banner from "./banner";

export default function Header() {
  return (
    <header className="usa-header usa-header--basic">
      <Banner />
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <div className="usa-logo" id="-logo">
            <em className="usa-logo__text">
              <Link href="/" title="USWDS Starter Project">
                USWDS Starter Project
              </Link>
            </em>
          </div>
        </div>
      </div>
    </header>
  );
}
