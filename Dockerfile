FROM nginx:1.13.9-alpine

COPY confs/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]