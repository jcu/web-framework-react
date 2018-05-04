# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* **Footer** now accepts a `version` prop to include your app version, and
  a `versionUrl` prop if you want the version number to be a link. Works
  great if you use dotenv (see **Footer** docs for more)

### Changed

* Reformat code according to StandardJS.
* Removed unused prop in **NavTab** component. This is a non-breaking change
  as it was never used at all.

## [0.1.6] - 2018-04-12

### Fixed

* **Button** now allows a `type` prop to be passed through to the DOM element.
* Prevent `className` being doubled up on **Button**.
* Prevent `variation` being passed through to **Button**'s DOM element.

## [0.1.5] - 2018-04-03

### Fixed

* Use `indexOf` for strings in **Buttons** and **Card** examples. This fixes support in
  old versions of IE.

## [0.1.4] - 2018-03-22

### Fixed

* Added CRICOS code to **Footer**.

## [0.1.3] - 2018-03-09

### Fixed

* Made `Table` component responsive by default. This was the intended design
  for this component.

## [0.1.2] - 2018-02-19

### Added

* Added CHANGELOG.md.

### Changed

* Header component now uses logos from official CDN.

## [0.1.1] - 2018-02-19

### Changed

* No changes in this version.

## [0.1.0] - 2018-02-16

### Added

* Initial release of components
