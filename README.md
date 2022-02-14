# coderunner-docker

Multi-container wrapper for the coderunner codebase using `docker-compose` and MongoDB.

## Setup & Usage

1. Clone this repo using `git clone`
2. Enter the directory `cd coderunner-docker`
3. Install dependencies `npm install`
4. Clone client repo `git clone -b dev/wailon git@github.com:rxdvd/coderunner-client.git client`
5. Clone server repo `git clone -b dev/mongo git@github.com:rxdvd/coderunner-server.git server`
   
* `npm run start` to run the application.
* `npm run stop` to stop the application.
* `npm run test` to run tests.
* `npm run coverage` to check test coverage.
