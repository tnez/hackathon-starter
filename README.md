# Hackathon Starter

A starter kit to quickly get a hackathon-style project off the ground. Leverages [gatsbyjs](https://www.gatsbyjs.org) and [grommet](http://grommet.io) to quickly build prototypes.

## Pre-Hackathon Checklist

- [ ] install **nvm** using the instructions here: [nvm#installation](https://github.com/creationix/nvm#installation)
- [ ] install latest version of **node**: `nvm install 10`
- [ ] install **yarn**: `brew install yarn --without-node`

## Getting Started

### Initializing the project

*This should only be done once by one team member at the beginning of the project.*

```sh
git clone https://github.com/tnez/hackathon-starter --depth 1 your-project-name

cd your-project-name
yarn run init

git remote add origin some-url-for-a-repo-you-have-created
git push -u origin master
```

### Getting started as developer

```sh
git clone your-new-project-repo your-new-project-name

cd your-new-project-name
yarn install
```

## Development

### Running the dev server

```sh
yarn run develop
```

### Build static site locally

```sh
yarn run build
```
