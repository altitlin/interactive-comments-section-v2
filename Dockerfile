FROM node:16

ARG PORT=4242

WORKDIR /app

COPY --chown=node package*.json ./

RUN npm ci

COPY --chown=node . .

EXPOSE $PORT:$PORT

USER node

CMD [ "npm", "run", "dev" ]
