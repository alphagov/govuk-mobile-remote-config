# GOV.UK Mobile Remote Config
This is a test repository looking at containerised remote config for the GOV.UK mobile apps.

## Usage

### To run locally

* `docker build -t remote-config .`
* `docker run -it -p 8080:80 remote-config`
* Application will be available locally at http://localhost:8080

### Updating config

Currently any static JSON files inside the /config directory will be included in the container and then served by the nginx server. There is no pre-processing step although we will be adding this soon.

Any requests which do not correspond to a file within the directory structure will default to serving the contents of /config/_404.json.
