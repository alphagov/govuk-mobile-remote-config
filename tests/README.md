# Testing for remote config

This directory contains a set of intergration-style tests to validate the content and behaviour of the generated / pre-processed JSON files, as well as the nginx server that surfaces them.

## Running tests

* run `npm install` before running tests
* use `npm test` to execute the tests

## How the tests work

* The tests use `jest-testcontainers` to spin up a Docker container with the nginx server
* This makes use of Docker Compose because that allows us to point at a Dockerfile rather than a built image
* We can then simply use `fetch` to hit endpoints on the Docker container in tests to validate behaviour
