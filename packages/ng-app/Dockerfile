# build environment
FROM node:10.17.0-alpine as builder

WORKDIR /app

COPY ./packages/ng-app/package.json .
# COPY ./packages/ng-app/yarn.lock .
RUN echo 'install NG app' && yarn
COPY ./packages/ng-app .
RUN yarn build

# production environment
FROM nginx:1.13.9-alpine

COPY ./confs/nginx-apps.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/ng-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]