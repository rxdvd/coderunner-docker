# coderunner-docker

Multi-container wrapper for the coderunner codebase using `docker-compose` and MongoDB.

## Setup & Usage

1. Clone this repo using `git clone`
2. Enter the directory `cd coderunner-docker`
3. Install dependencies `npm install`
4. Clone the `dev/wailon` branch from the [coderunner-client](https://github.com/rxdvd/coderunner-client/tree/dev/wailon) repo into `./client`.
5. Clone the `dev/mongo` branch from the [coderunner-server](https://github.com/rxdvd/coderunner-server/tree/dev/mongo) repo into `./server`.
   
* `npm run start` to run the application.
* `npm run stop` to stop the application.
* `npm run test` to run tests.
* `npm run coverage` to check test coverage.
