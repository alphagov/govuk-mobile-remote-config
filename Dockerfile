FROM nginx:1.27.0-bookworm

ADD config/ /usr/share/nginx/config/

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
