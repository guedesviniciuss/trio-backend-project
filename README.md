[<img src="https://www.trio.dev/hubfs/raw_assets/public/hs-www-trio/src/images/module-icons/logo_website.png" align="right" width="80">](https://www.opengl.org)

# Back-End Project (Trio)

> You'll be creating a tool that syncs contacts from **MockAPI** to **Mailchimp**. For this integration, you will need to get each contact's first name, last name, and email address from **MockAPI** and create them as new members of a new list on **Mailchimp**. The new list on **Mailchimp** should have your personal name (e.g.: `Gabriel Kugel`).

## Routes

### [GET] /docs

Projects' routes documentation (swagger)

### [GET] /contacts/sync

Syncronizing Mock Api contacts' return on members' list on Mailchimp.

## Goals
<ol>
    <li>Projects' configuration;</li>
    <li>Mailchimp configuration: (account creation; api key creation)</li>
    <li>Consume Mock Api (https://challenge.trio.dev/api/v1/contacts)</li>
    <li>Sync Mailchimp and Mock Api</li>
    <li>Unit and End-to-End tests' implementation</li>
    <li>Deploy on cloud</li>
</ol>

## Achieved Goals

- [x] Projects' configuration;
- [x] Mailchimp configuration: (account creation; api key creation)
- [x] Consume Mock Api (https://challenge.trio.dev/api/v1/contacts)
- [x] Sync Mailchimp and Mock Api
- [x] Unit and End-to-End tests' implementation
- [x] Deploy on cloud

## Projects configuration

## Development

```sh
$ yarn # download dependecies
$ yarn dev # start project on development mode
```

## Production

```sh
$ yarn # download dependecies
$ yarn build # transpile typescript code to javascript
$ yarn start # start project on production mode
```

## Docker
```sh
$ docker build -t trio-backend-assignment . # create image
$ docker run -d -p 3333:80 trio-backend-assignment # run image
```

## Important keys

```sh
MAILCHIMP_API_KEY="b0ecdca3b6a92e6321531376296a08c8-us21"
MAILCHIMP_SERVER_PREFIX="us21"
```

## Tree

```bash
├── Dockerfile
├── jest.config.ts
├── package.json
├── README
├── src
│   ├── app.ts
│   ├── infra
│   │   ├── docs
│   │   │   └── swagger.json
│   │   ├── environment
│   │   │   └── index.ts
│   │   ├── errors
│   │   │   └── AppError.ts
│   │   └── logger
│   │       └── index.ts
│   ├── modules
│   │   ├── contacts
│   │   │   └── sync
│   │   │       ├── providers
│   │   │       │   ├── MailchimpProvider
│   │   │       │   │   ├── IMailchimpProvider.ts
│   │   │       │   │   ├── MailchimpProvider.ts
│   │   │       │   │   └── utils
│   │   │       │   │       └── mailchimpConfig.ts
│   │   │       │   ├── MockApi
│   │   │       │   │   ├── IMockApiProvider.ts
│   │   │       │   │   └── MockApiProvider.ts
│   │   │       │   └── syncFactory.ts
│   │   │       ├── SyncController.ts
│   │   │       └── SyncUseCase.ts
│   │   └── shared
│   │       └── api
│   │           └── index.ts
│   ├── routes
│   │   ├── contactsRoutes.ts
│   │   └── index.ts
│   └── server.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```

## History

* 0.0.2
    * Mock Api and Mailchimp integration

* 0.0.1
    * Projects' initial configuration

### Members
<ul>
    <li>Vinícius Guedes da Silva – guedesvsilva@gmail.com</li>
</ul>

ADDITIONAL LINKS:

[Video Presentation](https://drive.google.com/file/d/1aREGWg7uzb-jumAaeXTLMJNQAr96lzGE/view?usp=drive_link)
<br/>
[Technical Design](https://docs.google.com/document/d/18pOA8WQ5IPFDDVEm3P9nRUI269RYbxQdefZZ9jRdE3Q/edit?usp=sharing)
<br />
[Application](https://trio-backend-project-production.up.railway.app/docs/)
