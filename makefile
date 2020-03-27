.PHONY: install build

install:
	docker-compose run --rm npm install

build:
	docker-compose run --rm npm run build
