FROM node:8.4

# Create app directory
RUN mkdir -p /usr/src/app/logs
WORKDIR /usr/src/app

ENV DIR=client-gateway/
# Install app dependencies
COPY ${DIR}bin bin
COPY ${DIR}dist dist
COPY protos protos
COPY ${DIR}.foreverignore .foreverignore
COPY ${DIR}package-lock.json package-lock.json
COPY ${DIR}package.json package.json

RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install --production && \
    npm cache clean --force

CMD npm start
