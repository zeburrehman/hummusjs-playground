FROM node:10.15.0
WORKDIR /home/app/hummusjs-playground/
COPY package.json .
RUN npm install
COPY . .
CMD ["npm" , "run", "dev"]