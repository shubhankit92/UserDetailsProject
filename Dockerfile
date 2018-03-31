FROM node:slim
COPY . /home/app
WORKDIR /home/app
RUN npm install

CMD ["node", "server.js"]