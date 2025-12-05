FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy everything from repo except infra and Jenkins files
COPY . .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
