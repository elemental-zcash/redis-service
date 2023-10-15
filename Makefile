init:
	bash ./setup.sh

start:
	docker compose -f docker-compose.yml up -d

down:
	docker compose -f docker-compose.yml down
