# Installation

To install the Agastya script on your website, you need your API key. You can find this in your admin panel or by getting in touch with us over support. Once you have your API key, make sure that you have added your website in the list of trusted domains, otherwise Agastya will show an unauthorized error in your console.

## JavaScript loader

Replace the `API_KEY` in the line below with your API key and add it before closing the `</body>` tag.

```html
<script src="https://agastya-loader.oswaldlabs.com/API_KEY.js" async></script>
```

This loader script will automatically load the most recent Agastya on your website, so your users always have the best features and security updates.

## Deprecated loaders

The above and correct JavaScript loader was introduced in 2018 in version 3.0.0. To provide complete backwards compatibility, the loader script of version 2.0.0 and above were automatically redirected to 3.0.0.

However, if you are using any of the following older, deprecated JavaScript files, Agastya will not work on your website and you should migrate immediately to resume services.

| Version | Year | URL | Status |
| ------- | ---- | --- | ------ |
| 2.x | 2017 | https://api.oswaldlabs.com/agastya-loader/API_KEY.js | <span style="color: #27ae60">•</span> Redirected |
| 1.x | 2017 | https://agastya.oswald.host/0.93/agastya.js | <span style="color: #e74c3c">•</span> Deprecated |
| 0.9 | 2016 | https://oswald.tech/widget?key=API_KEY | <span style="color: #e74c3c">•</span> Deprecated |

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
import agastya from "agastya";
```

Finally, initialize the plugin using the agastya.init function by supplying your API key as the parameter, and Agastya should be reading and working in your project.

```js
new Agastya("API_KEY");
```
