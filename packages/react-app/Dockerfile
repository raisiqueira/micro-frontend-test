# build environment
FROM node:10.17.0-alpine as builder

WORKDIR /app

COPY ./packages/react-app/package.json .
COPY ./packages/react-app/yarn.lock .
RUN echo 'Install React app' && yarn
COPY ./packages/react-app .
RUN yarn build

# production environment
FROM nginx:1.13.9-alpine

COPY ./confs/nginx-apps.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]