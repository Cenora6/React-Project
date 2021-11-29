FROM node:latest AS build
LABEL version="1.0"
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
RUN npm install --save typescript @types/node @types/react @types/react-dom @types/jest
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
