FROM node:16

ARG PORT=4242

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE $PORT:$PORT

CMD [ "npm", "run", "dev" ]
