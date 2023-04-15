FROM nginx:1.22.1
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY images /usr/share/nginx/html/images
COPY public /usr/share/nginx/html/public