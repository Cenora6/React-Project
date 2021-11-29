FROM node:latest

LABEL version="1.0"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

RUN npm install --save typescript @types/node @types/react @types/react-dom @types/jest

COPY . .

EXPOSE 3000

CMD ["npm", "start"]