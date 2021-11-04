# Instalura

<p align="center">
  <a href="https://instalura-leomiranda.vercel.app/" target="blank"><img src="./docs/print-instalura.png" width="950" alt="Instalura"></a>
</p>

Project of Advanced Front-End Bootcamp from Alura using the JAMStack.

## Technologies

[![Nodejs Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Yarn Badge](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com)
[![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://pt-br.reactjs.org)
[![Nextjs Badge](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)

## Resources

- [Styled components](https://styled-components.com): utilises tagged template literals to style your components.
- [Styled normalize](https://www.npmjs.com/package/styled-normalize): CSS-normalize library for styled-components.
- [lodash](https://lodash.com): A modern JavaScript utility library delivering modularity, performance & extras.
- [Google Fonts](https://fonts.google.com): Making the web more beautiful, fast, and open through great typography.
- [prop-types](https://www.npmjs.com/package/prop-types): Runtime type checking for React props and similar objects.
- [Framer Motion](https://www.framer.com/motion/): A production-ready motion library for React.
- [Lottie](https://github.com/crello/react-lottie): React/Typescript wrapper for awesome Airbnb's lottie-web lib.
- [yup](https://github.com/jquense/yup): Yup is a JavaScript schema builder for value parsing and validation.

## Resources for CI/CD

- [shelljs](https://www.npmjs.com/package/shelljs): ShellJS is a portable (Windows/Linux/OS X) implementation of Unix shell commands on top of the Node.js API.
- [husky](https://www.npmjs.com/package/husky): Husky improves your commits and more 🐶 woof!
- [commitizen](https://www.npmjs.com/package/commitizen): When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.
- [commitlint](https://commitlint.js.org/#/): commitlint helps your team adhering to a commit convention.
- [dependabot](https://dependabot.com): Automated dependency updates
- [Github Actions](https://github.com/features/actions): Automate your workflow from idea to production

## Next Features

- Static pages generated dynamically
- Static content
- Navigation as SPA
- Trailing slash as default for project pages using `next.config.js`

# Run Project

```
# clone repo
git clone <project>

# install dependencies
yarn install

# run project
yarn dev

# acess page
http://localhost:3000/
```

## Run online

This project can be tested online, click on badge below:

[![Vercel Badge](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white&link=https://instalura-leomiranda.vercel.app/)](https://instalura-leomiranda.vercel.app/)

## Tests

- Unit tests with [Jest](https://jestjs.io/pt-BR/).
- React Component tests with [React Testing Library](https://testing-library.com).
- Integrations tests (End to End - E2E) with [Cypress](https://www.cypress.io).

### Run unit tests

1. Run all at once: `yarn test`
2. Run and watch changes (development): `yarn test:watch`

### Run integration tests

1. Headless: `yarn test:integration`
2. On cypress test suite: `yarn test:integration:open`
