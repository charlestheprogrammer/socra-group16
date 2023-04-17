FROM nginx:1.22.1
COPY ./dist/index.html /usr/share/nginx/html/index.html
COPY ./dist/assets /usr/share/nginx/html/assets
COPY ./dist/favicon.ico /usr/share/nginx/html/favicon.ico
COPY ./dist/images /usr/share/nginx/html/images