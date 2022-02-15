# coderunner-docker

Multi-container wrapper for the coderunner codebase using `docker-compose` and PostgreSQL.

## Setup & Usage

1. Clone this repo using `git clone`
2. Enter the directory `cd coderunner-docker`
3. Initialise submodules `git submodule init && git submodule update`
4. Install dependencies `npm install`
   
* `npm run start` to run the application.
* `npm run stop` to stop the application.
* `npm run test` to run tests.
* `npm run coverage` to check test coverage.

## Note

Some of the tests are not passing due to differences in architecture between the 
deployed branches and the branches used for this repo, however everything should 
still work.

## To do

* Integrate postgres into Post model
