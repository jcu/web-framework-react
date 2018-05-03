
```jsx
<Footer />
```

Including the `version` prop displays an application version number along with the other content:

```jsx
<Footer version />
```

If you specify the `version` prop without supplying a string value, `Footer` will check the `REACT_APP_VERSION` environment variable. The [`dotenv`](https://github.com/motdotla/dotenv) package ([included in create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#user-content-adding-development-environment-variables-in-env)) can set this variable from your `package.json` file, if you add a `.env` file to the root of your project containing the following line:

```bash
REACT_APP_VERSION=$npm_package_version
```

You may supply a version string directly, and an optional URL the version should link to. 

```jsx
<Footer version="1970-04-20v0" versionUrl="https://web.jcu.io/v2/#footer" />
```

