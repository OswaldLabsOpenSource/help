# Installation

To install the Agastya script on your website, you need your API key. You can find this in your admin panel or by getting in touch with us over support. Once you have your API key, make sure that you have added your website in the list of trusted domains, otherwise Agastya will show an unauthorized error in your console.

## JavaScript loader

Replace the `API_KEY` in the line below with your API key and add it before closing the `</body>` tag.

```html
<script src="https://platform.oswaldlabs.com/v1/agastya/load/API_KEY.js" async defer></script>
```

::: warning IN BETA
The above loader URL is currently in beta. When we're out of beta, you can safely replace `platform-beta` with `platform` in the above line.
:::

This loader script will automatically load the most recent, stable version of Agastya on your website, so your users always have the best features and security updates.

- If you want to use the beta version of Agastya, you can replace `/_/` with `/_/beta/`
- If you want to use the nightly (breaking changes for developers) version of Agastya, you can replace `/_/` with `/_/dev/`

## Deprecated loaders

The above JavaScript loader was introduced in 2019 in version 4.7.0. To provide complete backwards compatibility, the loader script of version 2.0.0 and above were automatically redirected to 4.x.

However, if you are using any of the following older, deprecated JavaScript files, Agastya will not work on your website and you should migrate immediately to resume services.

| Version | Year | URL | Status |
| ------- | ---- | --- | ------ |
| <4.6 | 2019 | https://platform.oswaldlabs.com/_/API_KEY.js | <span style="color: #27ae60">•</span> Migrated |
| 4-beta | 2019 | https://loader.oswaldlabs.com/API_KEY.js | <span style="color: #27ae60">•</span> Migrated |
| 3.x | 2018 | https://agastya-loader.oswaldlabs.com/API_KEY.js | <span style="color: #27ae60">•</span> Redirected |
| 2.x | 2017 | https://api.oswaldlabs.com/agastya-loader/API_KEY.js | <span style="color: #27ae60">•</span> Redirected |
| 1.x | 2017 | https://agastya.oswald.host/0.93/agastya.js | <span style="color: #e74c3c">•</span> Deprecated |
| 0.9 | 2016 | https://oswald.tech/widget?key=API_KEY | <span style="color: #e74c3c">•</span> Deprecated |

In the above table, "Migrated" means we've set up a script which loads the new loader instead of redirecting the endpoint. This is because the `Cache-Control` headers of these loaders were set to infinite, and our internal update mechanism can load the most recent version of Agastya without changing the loader's code.

## NPM package

If you're using a package manager like NPM or Yarn, you can use the following package, but additional configuration is required. Our NPM package has no dependencies and creates a script to load the plugin.

### Yarn

We recommend using Yarn because it caches your packages. You can use the following line to install the `agastya` package to your project.

```bash
yarn add agastya
```

### NPM

Alternately, if you're using the NPM client, you can use the following line instead.

```bash
npm install agastya
```

### Configuration

You need to do additional configuration and initialize the package. Add the following code to your entry file (`app.js` or `index.js`).

If you're using ES6 imports and a bundler like Webpack, you can use the following line to import the package to your project.

```js
import Agastya from "agastya";
```

Finally, initialize the plugin using the agastya.init function by supplying your API key as the parameter, and Agastya should be reading and working in your project.

```js
const agastya = new Agastya("API_KEY");
```
