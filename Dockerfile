FROM node:18-alpine AS build

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app/
RUN ng build --base-href /abjad/interpreter/

FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/abjad-web /usr/share/nginx/html

EXPOSE 80
