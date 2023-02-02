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

## Accessibility

On every push, the [CI job](.github/workflows/ci.yml) runs ESLint,
and should verify that you're following some best practices.

This site should maintain high standards for accessibility, and I would like to
implement more tooling for it, but I also don't know what I'm doing - see
[issue #3](https://github.com/adhocteam/uswds_starter/issues/3) if you want to
help out

## Changing USWDS variables

Currently, you need to run `npm run css` if you modify any of the USWDS sass
variables, contained in `assets/stylesheets/uswds-settings.scss` (or if you
edit any other sass file). This will compile the sass to CSS to a file in
`assets/stylesheets/styles.css`, which is then used by the application.

Next.js has native [sass
integration](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)
but I didn't figure out how to use it
properly with USWDS. I would love help figuring this out! See [issue
#1](https://github.com/adhocteam/uswds_starter/issues/1) for my documentation
of things I tried.
