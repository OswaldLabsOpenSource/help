# Embeds
Agastya also supports embedding custom, third-party content. This can be used for services such as live chat, knowledge base, etc.

To set up an embed, you first have to create the URL:

```
/pages/embed?title=TITLE&url=URL
```

In the above URL, replace `TITLE` with the the URL-encoded title of the embed page and `URL` with a URL-encoded URL. For example, this is the link to the Oswald Labs Help embed:

```
/pages/embed?title=Help&url=https%3A%2F%2Fhelp.oswaldlabs.com
```

Navigation to embeds can be done through the [Navigation API](widget.html#navigation), or by creating a link using a call-to-action card from Agastya Admin:

```js
const title = "Help";
const url = "https://help.oswaldlabs.com";
const navigateTo = `/pages/embed/?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
agastya.navigate(navigateTo);
```

## Gitter chat

```
https://gitter.im/Microsoft/Typescript/~embed
```

![Gitter chat embed](https://public-cdn.oswaldlabs.com/help-assets/Screenshot%202019-03-17%20at%2013.16.15.png)

## Discord chat

Using [Titan Embeds](https://titanembeds.com), you can embed a Discord chat:

```
https://titanembeds.com/embed/556813798653296641
```

![Discord chat embed](https://public-cdn.oswaldlabs.com/help-assets/Screenshot%202019-03-17%20at%2013.25.22.png)

## tlk.io chat

```
https://tlk.io/oswald-labs
```

![tlk.io chat embed](https://public-cdn.oswaldlabs.com/help-assets/Screenshot%202019-03-17%20at%2013.31.49.png)

## Typeform survey

```
https://oswaldlabs.typeform.com/to/uWzZPc
```

![Typeform survey embed](https://public-cdn.oswaldlabs.com/help-assets/Screenshot%202019-03-17%20at%2013.45.34.png)
