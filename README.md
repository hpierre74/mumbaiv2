# Mumbai Café 2.0.0

## TL;DR

#### What am I ?

A nicely featured restaurant app _(for now)_

#### Why is it cool ?

The aim of this project is to be able to ship websites in minutes from a JSON config file and a few env variables.

#### How so ?

Firebase allows json import to database which is called on the app initialization

## Getting Started

- cd into your workspace
- pull the project

```
git clone https://github.com/hpierre74/mumbaiv2.git
```

- start fresh

```
git init
```

- install client and server dependencies

```
yarn && cd server && yarn && cd ..
```

- create a firebase project and add the firebase config in the `.env` file :

```json
REACT_APP_FIREBASE_APIKEY="[...]"
REACT_APP_FIREBASE_DOMAIN="[...].firebaseapp.com"
REACT_APP_FIREBASE_DB="https://[...].firebaseio.com"
REACT_APP_FIREBASE_ID="[...]"
REACT_APP_FIREBASE_BUCKET="[...].appspot.com"
REACT_APP_FIREBASE_MESSAGING="[...]"
```

- add gmail email and password to firebase functions config/env `firebase functions:config:set adress="[...]" password="[...]"`

## Techs

- React / Redux
- Node => Google Cloud Functions
- Firebase Realtime Database and Hosting
- Material-UI / Styled Components

## Features

- I18n FR/EN
- Mailings
- Bookings
- Content Edition (CMS)
- Events
- Stats / Charts
- Monitoring

## Roadmap

- Add SSR
- Add Templates for other kind of apps
- Improve CMS : allow user to create custom article templates and then allow page creation
