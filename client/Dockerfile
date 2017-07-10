FROM node:8.1.3
MAINTAINER Tikal

ENV NPM_CONFIG_LOGLEVEL warn

# Install `serve` to run the application.
RUN npm install -g serve
CMD serve -p 3000 -s build
EXPOSE 3000

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build --production
