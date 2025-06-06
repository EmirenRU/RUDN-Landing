cert:
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
      -keyout ./rudn-landing/private.key -out ./rudn-landing/private.crt \
      -subj "/C=RU/ST=Russia/L=Moscow/O=RUDN/CN=landing.rudn.ru"
key:
	openssl genpkey -algorithm RSA -out ./rudn-landing/private.key -pkeyopt rsa_keygen_bits:2048

compose-build:
	cd rudn-landing && docker-compose up --build

compose:
	cd rudn-landing && docker-compose up

compose-down:
	cd rudn-landing && docker-compose down

add-hosts:
	@if ! grep -q "127.0.0.1 landing.rudn.ru" /etc/hosts; then \
		echo "127.0.0.1 landing.rudn.ru" | sudo tee -a /etc/hosts; \
	fi
dev:
	cd rudn-landing && npm run dev

all: key cert add-hosts compose
.PHONY: cert key all compose compose-build compose-down add-hosts