import Image from "next/image";

import circle from "/public/uswds/img/circle-124.png";
import SvgAccessibleForward from "./icons/AccessibleForward.js";
import SvgBuild from "./icons/Build.js";
import SvgConstructionWorker from "./icons/ConstructionWorker.js";
import SvgGithub from "./icons/Github.js";

export default function GridContainer() {
  return (
    <section className="usa-graphic-list usa-section usa-section--dark">
      <div className="grid-container">
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            {/*style={{
                "background-color": "color(srgb 0.001 0.4424 0.737)",
                "border-radius": "50%",
              */}
            <div
              style={{
                width: 124,
                height: 124,
                "background-color": "color(srgb 0.001 0.4424 0.737)",
                "border-radius": "50%",
              }}
              className="usa-media-block__img"
            >
              <SvgAccessibleForward
                alt="Accessible by default"
                viewBox="0 0 25 25"
                style={{
                  fill: "white",
                  stroke: "grey",
                  "stroke-width": ".25px",
                  width: 124,
                  height: 124,
                  "background-color": "color(srgb 0.001 0.4424 0.737)",
                  "border-radius": "50%",
                }}
              />
            </div>
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Accessible by default
              </h2>
              <p>
                The USWDS provides an accessible base, and every PR is
                automatically linted by lighthouse and axe
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <div
              style={{
                width: 124,
                height: 124,
                "background-color": "color(srgb 0.001 0.4424 0.737)",
                "border-radius": "50%",
              }}
              className="usa-media-block__img"
            >
              <SvgBuild
                alt="Easy to get started"
                viewBox="-5 -5 35 35"
                style={{
                  fill: "white",
                  stroke: "grey",
                  "stroke-width": ".25px",
                  width: 124,
                  height: 124,
                  "background-color": "color(srgb 0.001 0.4424 0.737)",
                  "border-radius": "50%",
                }}
              />
            </div>
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">Easy to start</h2>
              <p>
                Clone the repository and get building right away, with rapid
                feedback
              </p>
            </div>
          </div>
        </div>
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <div
              style={{
                width: 124,
                height: 124,
                "background-color": "color(srgb 0.001 0.4424 0.737)",
                "border-radius": "50%",
              }}
              className="usa-media-block__img"
            >
              <SvgConstructionWorker
                alt="Technologies you already use"
                viewBox="-5 -5 35 35"
                style={{
                  fill: "white",
                  stroke: "grey",
                  "stroke-width": ".25px",
                  width: 124,
                  height: 124,
                  "background-color": "color(srgb 0.001 0.4424 0.737)",
                  "border-radius": "50%",
                }}
              />
            </div>
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Technologies you already use
              </h2>
              <p>
                Built with the USWDS, react, and next.js so that you have a
                great foundation to work from
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <div
              style={{
                width: 124,
                height: 124,
                "background-color": "color(srgb 0.001 0.4424 0.737)",
                "border-radius": "50%",
              }}
              className="usa-media-block__img"
            >
              {/* How do I get this centered without monkeying with viewBox */}
              <SvgGithub
                alt="All Open Source"
                viewBox="-1 -1 26 26"
                style={{
                  fill: "white",
                  stroke: "grey",
                  "stroke-width": ".25px",
                  width: 124,
                  height: 124,
                  "background-color": "color(srgb 0.001 0.4424 0.737)",
                  "border-radius": "50%",
                }}
              />
            </div>
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">All Open Source</h2>
              <p>
                Come to{" "}
                <a href="https://github.com/adhocteam/uswds_starter">
                  our github
                </a>{" "}
                and report any problems you encounter or help us build new
                features
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
