FROM node:18.12.0-alpine

WORKDIR /app

# copy source files
COPY package.json yarn.lock ./

# install dependencies
RUN yarn

#copy files
COPY . ./

EXPOSE 3000