# Integrations

Agastya supported several modules and integrations, but they are not added by default to decrease load time. If you want a specific integration, you can enable it from [Agastya Admin](https://agastya.oswaldlabs.com):

Once enabled, these integrations will be made available on your website and in their own `agastya.INTEGRATION` context.

## Methods

You can call integration-specific methods too, but each integration supports the following methods:

```js
agastya[INTEGRATION].stop(); // Stop the service
agastya[INTEGRATION].update(); // Update the service
```

For example, if you want to stop the EU cookie law compliance service, you can do this:

```js
agastya["eu-cookie-law"].stop();
```
