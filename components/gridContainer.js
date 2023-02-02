import Image from "next/image";

import circle from "/assets/img/circle-124.png";

export default function GridContainer() {
  return (
    <section className="usa-graphic-list usa-section usa-section--dark">
      <div className="grid-container">
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <Image
              className="usa-media-block__img"
              src={circle}
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Graphic headings can vary.
              </h2>
              <p>
                Graphic headings can be used a few different ways, depending on
                what your landing page is for. Highlight your values, specific
                program areas, or results.
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <Image
              className="usa-media-block__img"
              src={circle}
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Stick to 6 or fewer words.
              </h2>
              <p>
                Keep body text to about 30 words. They can be shorter, but try
                to be somewhat balanced across all four. It creates a clean
                appearance with good spacing.
              </p>
            </div>
          </div>
        </div>
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <Image
              className="usa-media-block__img"
              src={circle}
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Never highlight anything without a goal.
              </h2>
              <p>
                For anything you want to highlight here, understand what your
                users know now, and what activity or impression you want from
                them after they see it.
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <Image
              className="usa-media-block__img"
              src={circle}
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Could also have 2 or 6.
              </h2>
              <p>
                In addition to your goal, find out your users’ goals. What do
                they want to know or do that supports your mission? Use these
                headings to show those.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
