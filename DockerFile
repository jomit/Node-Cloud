# use the latest LTS (long term support) version argon of node available from the Docker Hub

FROM node:argon

# Create app directory

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Copy package.json and run npm install to add dependencies

COPY package.json /usr/src/app/

RUN npm install

# Copy source code

COPY . /usr/src/app

EXPOSE 8080

CMD ["node", "."]


