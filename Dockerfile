FROM nginx

RUN npm run build:test

COPY build/ /usr/share/nginx/html/

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80




