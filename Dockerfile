FROM node:18-alpine AS build

ARG app_name

RUN mkdir -p /app
WORKDIR /app

COPY ./ ./
RUN npm install

RUN npx nx run ${app_name}:build:production --base-href /abjad/${app_name}/

FROM nginx:alpine

ARG app_name

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/apps/${app_name} /usr/share/nginx/html

EXPOSE 80
