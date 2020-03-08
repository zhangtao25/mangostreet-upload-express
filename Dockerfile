FROM node:10.13-alpine
MAINTAINER zhangwenrou

# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service

# Bundle app source
COPY . /home/Service
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]