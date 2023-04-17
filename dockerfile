FROM node:19.8.1-alpine as build
WORKDIR ./
ENV PATH ./node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY ./src ./src
COPY ./public ./public
COPY index.html ./index.html
RUN npm install
RUN npm run build

FROM nginx:1.22.1
COPY --from=build ./dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf