# USWDS NextJS Starter

This repository aims to get you up and running with a simple [US Web Design
System](https://designsystem.digital.gov/) site using React as quickly and
simply as possible, to facilitate new sites or easy prototyping.

Visit the page that this site generates at
[https://adhocteam.github.io/uswds_nextjs_starter/](https://adhocteam.github.io/uswds_nextjs_starter/)

## Deployment

This repository deploys to GitHub pages on every push, via [this workflow
job](.github/workflows/github-pages.yml).

To build it manually, run `npm run export`, and you will find the site in the
`out` directory

## Development

Run `npm install` then `npm run dev` to turn on the dev server with hot reloading

## Accessibility

On every push, the [CI job](.github/workflows/ci.yml):

- runs ESLint with the reasonably strict [core web vitals](https://nextjs.org/docs/basic-features/eslint#core-web-vitals) preset
- runs [Lighthouse CI](https://github.com/treosh/lighthouse-ci-action) and fails if the accessibility score isn't 100%
  - config is located in the `.github/lighthouse` directory
- runs [axe](https://www.npmjs.com/package/@axe-core/cli) and fails if anything doesn't pass

This template should maintain the highest standards for accessibility, and I
would like to implement more tooling for it, but I also don't know what I'm
doing - see [issue #3](https://github.com/adhocteam/uswds_nextjs_starter/issues/3) if
you want to help out

Check out [accessibility.digital.gov](https://accessibility.digital.gov) for
good resources on why this is so important

## Changing USWDS sass variables

If you update any [uswds
settings](https://designsystem.digital.gov/documentation/settings/) in [the
uswds settings sass file](assets/stylesheets/uswds-settings.scss) while you're
running the dev mode server, you'll see your changes reflected in the page as
soon as it compiles.

## Contributing

This repo accepts contributions! Just file a PR.

Feel free to create a discussion topic if you have an idea and you want
feedback on it before starting to work on it.

## Similar repositories

- [navapbc/template-application-nextjs](https://github.com/navapbc/template-application-nextjs) is a similar template app with Next.js + React and a somewhat different focus
