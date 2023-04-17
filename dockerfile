FROM nginx:1.22.1
COPY ./dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf