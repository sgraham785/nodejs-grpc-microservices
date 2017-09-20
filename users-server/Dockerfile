FROM node:8.4

# Create app directory
RUN mkdir -p /usr/src/app/logs
WORKDIR /usr/src/app

ENV DIR=users-server/
# Install app dependencies
COPY ${DIR}bin bin
COPY ${DIR}db db
COPY ${DIR}dist dist
COPY protos protos
COPY ${DIR}.foreverignore .foreverignore
COPY ${DIR}package-lock.json package-lock.json
COPY ${DIR}package.json package.json
COPY ${DIR}md-seed-config.js md-seed-config.js
COPY ${DIR}md-seed-generator.json md-seed-generator.json

RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install --production && \
    npm cache clean --force

CMD npm start
