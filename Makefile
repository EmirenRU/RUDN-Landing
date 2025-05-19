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

all: key cert compose
.PHONY: cert key all compose compose-build compose-down