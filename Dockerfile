FROM nginx:1.27-alpine
COPY index.html style.css script.js config.js manifest.webmanifest sw.js /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY nginx.frontend.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx","-g","daemon off;"]
