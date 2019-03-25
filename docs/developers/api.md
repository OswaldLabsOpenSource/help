# API basics

After [installing](installation.html) Agastya on your website, you can start using the client side API.

## Identifying your version

If you've signed up for Agastya in 2018 or 2019, you are automatically upgraded to Agastya 4. You can check this by opening the Agastya widget on your website and going to Settings → About.

![Screenshot of version](https://public-cdn.oswaldlabs.com/help-assets/Screenshot%202019-03-17%20at%2015.31.42.png)

## Version 4 and above

As soon as Agastya has loaded on your website, you can start using the API. In the global `window` object, you can define `a11ySettings` and listen for the `"ready"` event:

```js
window.a11ySettings = window.a11ySettings || {};
window.a11ySettings.on = {
  ready: agastya => {
    // Now, you can use `agastya`:
    // For example, open the Agastya widget:
    agastya.open();

    // You can also use the global `agastya` object:
    window.agastya.open();
  }
};
```

Now that you're all set up, start using the API with [widget manipulation](widget.html).

## Version 3.8.2 and below

::: danger DEPRECATED
The following guidelines are are deprecated, please upgrade to Agastya 4.
:::

If you're using a version of Agastya before the v4 update, you first have to initialize the API:

```js
agastya.init();
```

Then, you can start using the API.

The basic structure of a method is `agastya.CATEGORY.METHOD`. Supported categories are `frame` and `api`. This developer documentation is for v4 and above, but v3 users can control the widget like this:

```js
agastya.frame.open(); // Opens the Agastya widget
agastya.frame.close(); // Closes the Agastya widget
agastya.frame.toggle(); // Toggles the Agastya widget
```

In the `api` category, the first parameter is the service and the second is the value. Here's an example:

```js
agastya.api("translate", "fr"); // Translate to French
agastya.api("cssClass", "dyslexia"); // Turn on dyslexia-friendly mode
```
