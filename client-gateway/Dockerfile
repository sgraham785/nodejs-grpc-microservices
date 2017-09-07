FROM node:8.2.1

# Create app directory
RUN mkdir -p /usr/src/app/logs
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
ADD .foreverignore .
COPY node_modules .
COPY dist .
CMD npm start
