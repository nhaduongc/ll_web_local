up:
	@docker-compose up -d --build
down:
	@docker-compose down
install:
	@docker exec litter-lotto_web_frontend yarn install:dev
run:
	@docker exec litter-lotto_web_frontend yarn start
shell:
	@docker exec -it litter-lotto_web_frontend sh