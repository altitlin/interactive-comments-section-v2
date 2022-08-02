FROM node:16

WORKDIR /fake-api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3030:3030

CMD ["npm", "run", "fake-api"]
