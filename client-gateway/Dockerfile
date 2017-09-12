FROM node:8.2.1

# Create app directory
RUN mkdir -p /usr/src/app/logs
WORKDIR /usr/src/app

# Install app dependencies
COPY bin bin
COPY dist dist
COPY node_modules node_modules
COPY protos protos
COPY package.json package.json
COPY .foreverignore .foreverignore
CMD npm start
