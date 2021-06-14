![shahriar.png](https://i.ibb.co/23N3Lhh/portfolio.png)

## Getting Started

### First, download/clone the project. Then go to the `personal-portfolio` folder and run `npm install` or `yarn install`.

<br/>

### Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>

### Environment variables

Go to the `pages/api/contact.js` and you will find the variables. Create a `.env` file and fill up those fields (Used Nodemailer with Google Gmail OAuth2).

```
NODE_MAILER_USER=
NODE_MAILER_PASS=
EMAIL=
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URI=
REFRESH_TOKEN=
```

See more about nodemailer oAuth2 [here](https://nodemailer.com/smtp/oauth2/).
