# USWDS Starter

This repository aims to get you up and running with a simple [US Web Design
System](https://designsystem.digital.gov/) site using React as quickly and
simply as possible, to facilitate new sites or easy prototyping.

Visit the page that this site generates at
[https://adhocteam.github.io/uswds_starter/](https://adhocteam.github.io/uswds_starter/)

## Deployment

This repository deploys to github pages on every push, via [this workflow
job](.github/workflows/ci.yml).

To build it manually, run `npm run export`, and you will find the site in the
`out` directory

## Development

Run `npm run dev` to turn on the dev server with hot reloading

## Accessibility

On every push, the [CI job](.github/workflows/ci.yml):

- runs ESLint with the reasonably strict [core web vitals](https://nextjs.org/docs/basic-features/eslint#core-web-vitals) preset
- runs [Lighthouse CI](https://github.com/treosh/lighthouse-ci-action) and fails if the accessibility score isn't 100%
  - config is located in the `.github/lighthouse` directory

This template should maintain the highest standards for accessibility, and I
would like to implement more tooling for it, but I also don't know what I'm
doing - see [issue #3](https://github.com/adhocteam/uswds_starter/issues/3) if
you want to help out

## Changing USWDS sass variables

If you update any [uswds
settings](https://designsystem.digital.gov/documentation/settings/) in [the
uswds settings sass file](assets/stylesheets/uswds-settings.scss) while you're
running the dev mode server, you'll see your changes reflected in the page as
soon as it compiles.
