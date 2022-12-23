FROM node:14
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install && npm install vue-router@4 
EXPOSE 8080
CMD ["npm", "run", "serve"]