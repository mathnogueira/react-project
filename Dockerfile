FROM httpd
WORKDIR /usr/local/apache2/htdocs/

COPY src/index.html .
COPY src/public ./public/

EXPOSE 80
