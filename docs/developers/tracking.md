# Tracking and data

Agastya comes built-in with a secure event tracker. All widget-related events and pageviews are automatically tracked, but you can also track custom events:

```js
agastya.secureTrack({ /* Your object */ }, () => { /* Callback */ });
```

## Secure tracker

Your tracking object can contain any number of key-values with data you want to track. For example, clicking on a button can track a custom event:

```js
document.querySelector("button").addEventListener("click", () => {
    agastya.secureTrack({ clicked: "button" });
});
```

Details such as date and time, page URL, title, user agent information, and geolocation are automatically tracked with each `secureTrack` event.

## User data

You can fetch all known information about a user using: `agastya.getData()`. This is a combination of `agastya.getDetails()` and `agastya.getUserInfo()`:

```js
let data = agastya.getData();
```

## Global details

You can also fetch global details about the context using `agastya.getDetails()`:

```js
let details = agastya.getDetails();
```

Now, `details` looks like this:

```js
details = {
    absoluteResolution: "1440x900", // Screen resolution
    adBlock: true, // Has AdBlock enabled?
    api_key: "440d554514", // Your API key
    availableResolution: "1440x877", // Available resolution
    baseUrl: "https://agastya-app.oswaldlabs.com", // Agastya app URL
    cacheKey: "dbz76inkcw8", // Agastya app's cache version
    cookies: "_gat_agastya=1", // Cookies on this page
    language: "en", // Page/user's language
    nativeResolution: "1440x900", // Screen resolution
    referrer: "https://google.com/search", // Referrer URL
    title: "Agastya", // Webpage title
    url: "https://example.com", // URL
    version: "4.0.78-beta" // Agastya version
};
```

### Examples

#### AdBlock message

For example, you can use the global details to display a message for users using ad-blocking software:

```js
const details = agastya.getDetails();
if (details.adBlock) {
    alert("Please don't use AdBlock, ads pay to keep this site free.");
}
```

#### Redirect to local version

You can also use global details to redirect users to a localized version of your website:

```js
const details = agastya.getDetails();
if (details.lang === "nl") {
    location.href = "https://www.google.nl";
} else {
    // Continue with English website
}
```

## User details

You can also get session and an approximate geolocation details using `agastya.getUserInfo()`:

```js
let details = agastya.getUserInfo();
```

This is what `details` looks like now:

```js
details = {
    accuracy_radius: 50, // Geolocation accuracy in KM
    city: "Enschede", // City name
    continent: "Europe", // Continent name
    country_code: "NL", // ISO 3166-1 alpha-2 country code
    country_name: "Netherlands", // Country name
    latitude: 52.1928, // Approximate latitude
    longitude: 6.853, // Approximate longitude
    region_code: "OV", // Region code
    region_name: "Provincie Overijssel", // Region name
    session_id: "HKB9yATbBQDU1SmRz3ELwN8JKi9AHVPD", // Unique session ID
    time_zone: "Europe/Amsterdam" // User's timezone
}
```

### Examples

#### EU messages

Using the continent information (or country code), you can display specific messages for users from Europe:

```js
const details = agastya.getUserInfo();
if (details.continent === "Europe") {
    alert("You can change your GDPR preferences here: example.com");
}
```

#### Currency

You can also use the country code to show prices in local currencies:

```js
const details = agastya.getUserInfo();
let currency, price;
switch (details.country_code) {
    case "US":
        currency = "$";
        price = 120;
        break;
    case "GB":
        currency = "£";
        price = 90;
        break;
    default:
        currency = "€";
        price = 100;
        break;
}
alert(`You have to pay ${currency} ${price}`);
```
