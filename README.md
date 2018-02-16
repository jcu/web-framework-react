# JCU Web Framework for React

[![Build Status](https://travis-ci.org/jcu/web-framework-react.svg?branch=master)](https://travis-ci.org/jcu/web-framework-react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package can be used in two different ways: as a library of React
components or as the Living Style Guide for James Cook University.

## Requirements

* Node 8.9.1 LTS (or above) and Yarn
* Static web hosting (such as <https://research.jcu.edu.au>)
* Access to JCU Web Framework via CDN (<https://cdn.jcu.edu.au>)

## Development

To set up for development, run the following:

    yarn
    yarn start

To run the tests on the code:

    yarn test

You can also check code coverage using:

    yarn test --coverage

You can debug interactively using Chrome's Developer Tools or Node's CLI
interface using the commands respectively:

    yarn test-inspect
    yarn test-inspect-cli

## Deployment

    yarn && yarn build

Now, copy files located within `styleguide/` to your static web host.

## Upgrading

* To upgrade `react-scripts` (create-react-app), then follow the instructions
  in the main
  [README](https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/README.md#updating-to-new-releases).

* Ensure `eslint` version matches that which specified as a `react-scripts`
  dependency.  If it's not exactly the same, `yarn start` will fail.  Ignore
  its instructions and update our own `package.json` here.

## Coding standards

The codebase adheres to [JavaScript Standard Style](https://standardjs.com)
and changes are automatically checked in a pre-commit hook.
