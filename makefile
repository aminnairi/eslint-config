.PHONY: install build uninstall

install:
	docker-compose run --rm npm install

build:
	docker-compose run --rm npm run build

uninstall:
	docker-compose run --rm shell rm -rf node_modules
