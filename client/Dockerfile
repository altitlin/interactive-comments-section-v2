FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4242:4242

CMD [ "npm", "run", "dev" ]
