FROM node:carbon

# Creating app directory
WORKDIR /usr/src/app

# Installing node modules
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Exposing api and server ports
EXPOSE 9966
EXPOSE 3000

CMD ["npm","run","dev"]
