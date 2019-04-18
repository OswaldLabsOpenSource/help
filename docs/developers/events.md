# Listening for events

Agastya emits information every time an important event occurs. You can listen to an event by adding an event listener using the `agastya.on()` method:

```js
const listener = () => {
  console.log("Agastya widget was opened");
};
agastya.on("open", listener);
```

Removing an event listener is equally easy:

```js
agastya.off("open", listener);
```

## When loading asynchronously

When you're using the Agastya loader script, it's recommended you use the `window.agastyaSettings` technique instead of `window.agastya`, because the global `agastya` object may not be ready yet:

```js
window.agastyaSettings = window.agastyaSettings || {};
window.agastyaSettings.on = {
  ready: () => {
    // Now, we know for sure that window.agastya is available
  }
};
```

## Emitted events

The following events are emitted by Agastya:

| Event | Returns | Emitted when |
| ----- | ------- | ----------- |
| `ready` | Nothing | Agastya is ready |
| `error` | Nothing | API key error |
| `start` | Nothing | Agastya has started |
| `create` | Nothing | Before appending widget |
| `iframe-appended` | Nothing | After appending widget |
| `communication-requested` | Nothing | Messaging widget |
| `open` | Nothing | Widget is opened |
| `close` | Nothing | Widget is closed |
| `error-js-module` | Nothing | Unable to load module |
| `button-appended` | Agastya button | After appending button |
| `toggle` | Agastya button | Widget is toggled |
| `cached-preferences` | Styles object | Got user's preferences |
| `secure-track` | Tracking object | Tracking a custom event |
| `preloaded-external-css` | File URL | Got cached stylesheet |
| `loading-external-css` | File URL | Loading stylesheet |
| `loaded-external-css` | File URL | Completed loading stylesheet |
| `preloaded-js-module` | File URL | Got cached JS module |
| `loading-js-module` | File URL | Loading JS module |
| `loaded-js-module` | File URL | Completed loading JS module |
| `inject-css` | Style DOM element | Injecting CSS styles |
| `update-css` | Styles object | Updating styles object |
| `track` | Tracking object | Tracking event |

## Custom events

You can also emit your own events using `agastya.$emit()`:

```js
agastya.on("my-custom-event", data => {
    console.log(`Custom event fired: ${data.info}`);
});
agastya.$emit("my-custom-event", { info: "my-custom-parameter" });
// Custom event fired: my-custom-parameter
```
