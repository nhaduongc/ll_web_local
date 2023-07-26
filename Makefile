up:
	@docker-compose up -d --build
down:
	@docker-compose down
install:
	@docker exec litterlotto_web_frontend yarn install:dev
run:
	@docker exec litterlotto_web_frontend yarn start
shell:
	@docker exec -it litterlotto_web_frontend sh
