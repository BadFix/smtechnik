# SMTechnik — website prototype

Modern German-language company website for SMTechnik GmbH & Co. KG, based on the information and media from https://www.s-m-technik.de/.

## Preview

https://smtechnik-neu.badfix.chatgpt.site/ — access is managed in Sites.

## Run locally

Requires Node.js 18 or later. No package installation is required.

```sh
npm start
```

Open http://127.0.0.1:4173/.

## Project structure

- `dist/`: the complete static website, styles, JavaScript and local image assets.
- `server.mjs`: local preview server.
- `.openai/hosting.json`: the existing Sites project identity and static deployment configuration; contains no secrets.

The main page includes accessible expandable service descriptions. Other pages cover services, machinery and technical data, company information, gallery, careers, training, contact and company details.

## Prototype limitations

- The contact form opens an email draft; it does not send messages through a server.
- Applications use email links.
- Privacy and cookie policy links refer to the existing company website. They must be checked against the final hosting and services before launch.
- Certification statements come from the existing website. Current certificates and the certification body's rules must be verified before using certification marks. The ISO corporate logo is not used.
- Existing photographs, pictograms, logo and company information are used for this redesign. Publication in this repository does not grant a license to reuse the company's media.

## Deployment

Serve the contents of `dist/` with any static hosting provider. The website has no framework dependency or build step. Domain and email migration are separate from this prototype.
