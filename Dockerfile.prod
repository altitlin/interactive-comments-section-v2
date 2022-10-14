FROM node:16-alpine AS builder

WORKDIR /app

COPY --chown=node package*.json ./

RUN npm ci

COPY --chown=node . .

RUN npm run build

USER node

FROM nginx:1.23.1-alpine

RUN apk add bash

COPY --chown=node nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=node certs/* /etc/ssl/

WORKDIR /usr/share/nginx/html

COPY --chown=node --from=builder /app/dist/* ./
COPY --chown=node *.sh ./

RUN chmod +x *.sh

CMD ["/usr/share/nginx/html/nginx_start.sh"]
