FROM wordpress:php7.2-fpm-alpine

RUN apk add --no-cache curl tar \
    && mkdir -p /app \
    && curl -o wordpress.tar.gz https://wordpress.org/latest.tar.gz \
    && tar -zxf wordpress.tar.gz -C /app/ \
    && rm -rf wordpress.tar.gz \
    && mv /app/wordpress/wp-config-sample.php /app/wordpress/wp-config.php

COPY cmd.sh /usr/local/bin/
COPY uploads.ini /usr/local/etc/php/conf.d/uploads.ini
ADD plugins /app/wordpress/wp-content/plugins
CMD ["cmd.sh"]
