## Description

- PageStash is a simple Bookmark Api
- Features:
  - User authentication (jwt)
  - User can add bookmarks
  - User can edit bookmarks
  - User can delete bookmarks

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Setup database container

```bash
$ docker-compose up
```

## REST API DOCS
To view the APIs, run the server on localhost and visit http://localhost:3000/api/docs

## GraphQl endpoint
- After starting the server, experiment with the GraphQl endpoints throught the Apollo sandbox in http://localhost:3000/graphql

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
