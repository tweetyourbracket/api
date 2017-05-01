bc-api
=================

The API for [bracket.club](https://bracket.club).

[![Build Status](https://travis-ci.org/bracketclub/api.svg?branch=master)](https://travis-ci.org/bracketclub/api)
[![Greenkeeper badge](https://badges.greenkeeper.io/bracketclub/api.svg)](https://greenkeeper.io/)

https://bc-api.now.sh

### Routes

**Users**
- `/users/:id`
- `/users/:id/:sport-:year`

**Entries**
- `/entries/:sport-:year`
- `/entries/:id`

**Masters**
- `/masters/:sport-:year`


### Starting the API

**Locally**
```sh
npm install
npm start
```

**Production**
```sh
# Make sure the POSTGRES_URL secret exists in the .env file
touch .env
echo "POSTGRES_URL=<TOTES_SECRET_CONN_STRING>" >> .env

# Deploy to bc-api
npm run deploy

# If you're happy with the deploy
# API will now be accessible from https://bc-api.now.sh
now run deploy:alias

# If you want to cleanup old deployments
npm run deploy:purge
npm run deploy:list # to confirm
```

### Exporting Data

By default this will use variables from `getconfig` and write data to the `bracket.club` client repo (which should be located as a sibling of this repo).

```
npm run export
```

If you wanted to export stuff from production:

```
NODE_ENV=production npm run export
```
