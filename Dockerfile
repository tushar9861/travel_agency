FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copy only website files, not the whole repo
COPY ./web/ .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
