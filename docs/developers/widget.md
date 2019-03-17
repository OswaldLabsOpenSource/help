# Widget manipulation

The JavaScript package adds both the Agastya widget and APIs to your website. If you don't want to use the API, just adding the package is enough and your users can directly interact with the widget. However, you can also programmatically control the widget.

## Open, close, toggle

You can make your own buttons to let users open and close the widget. If you have a server-rendered website, you can just use [Conditional markup](conditional-markup.html) to control the widget:

```html
<button data-agastya="open">Accessibility options</button>
```

You can also use the following methods to programmatically open or close the widget:

```js
agastya.open(); // Opens the widget
agastya.close(); // Closes the widget
agastya.toggle(); // Opens if closed, closes if opened
```

## Navigation

To navigate to a specific page within the widget, you can use `agastya.navigate(page: string)`:

```js
agastya.navigate("/pages/settings"); // Navigate to the settings page
agastya.navigate("/modes/all"); // Show list of all modes
```

You can also open the widget and directly navigate to a page:

```js
// Open the widget and navigate to the customize page
agastya.open("/pages/customize");
```

You can also navigate to [Embeds](embeds.html), but it's important to get their URL right. For more information, refer to the documentation about embedded pages:

```js
// Navigate to the help page
agastya.navigate("/pages/embed?title=Help&url=https%3A%2F%2Fhelp.oswaldlabs.com%2Fusage-guidelines%2F");
```

## Unappend

If, for any reason, you want to completely remove Agastya from your website after an event, you can use `agastya.unappend()`. Note that this will remove the button, widget, any active modes, scripts, etc. It'll be like you never loaded Agastya at all:

In the following example, Agastya is removed from a webpage if it's currently available in the DOM:

```js
if (agastya && agastya.ready) return agastya.unappend();
```
