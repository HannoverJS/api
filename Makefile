#! /usr/bin/make -f

.DEFAULT_GOAL := help
.PHONY : build deploy

build: ## Create binary and Docker build
	@echo "Fetching dependencies..."
	@go get
	@echo "Building App..."
	@env GOOS=linux GOARCH=amd64 go build -o hgophers-api
	@echo "Creating Container..."
	@docker build -t voigt/hannovergophers-api .

docker-push: ## Push to Docker repository
	@ docker tag voigt/hannovergophers-api hub.docker.com:5000/r/voigt/hannovergophers-api
	@ docker push voigt/hannovergophers-api

help: ##Shows help message
	@echo "Available make commands:"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
