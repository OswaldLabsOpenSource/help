# Oswald Labs' Helpdesk

## Development

To write a new help document, create a Markdown file in the `./docs` folder and add its ID to the relevant topic in the `./website/sidebars.json` file.

Run a local version of this website using:

```bash
cd website && yarn start
```

## Production

Deploy this project on GitHub pages using the following command:

```bash
cd website && yarn publish-gh-pages
```
