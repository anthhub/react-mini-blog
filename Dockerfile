FROM node:12.18.3 AS builder
RUN npm install -g yarn --force 

WORKDIR /code
ADD . /code

RUN yarn

ENV NODE_ENV production
RUN yarn build:prod

FROM nginx:alpine
COPY --from=builder /code/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
