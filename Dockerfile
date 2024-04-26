#Base
FROM node:18
#File directory 
WORKDIR /usr/src/app        
#Package
COPY tsconfig*.json ./
COPY package*.json ./
RUN npm install
#Bundle app source
COPY . .
#Create dist for production
RUN npm run build
EXPOSE 3000
#Starting the server
CMD [ "npm", "run", "start:dev" ]