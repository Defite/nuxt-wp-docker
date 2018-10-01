#!/bin/sh

# Wordpress config stuff
cd /app/wordpress
sed -i -e "s/database_name_here/$WORDPRESS_DB_NAME/" wp-config.php
sed -i -e "s/username_here/$WORDPRESS_DB_USER/" wp-config.php
sed -i -e "s/password_here/$WORDPRESS_DB_PASSWORD/" wp-config.php
sed -i -e "s/localhost/$WORDPRESS_DB_HOST/" wp-config.php
echo -e "define('FS_METHOD', 'direct');" >> wp-config.php

# Download wp-cli.phar
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

# Download plugins and activate
# php wp-cli.phar plugin --allow-root install menu-swapper --activate
# php wp-cli.phar plugin --allow-root install wp-rest-api-v2-menus --activate

php -S 0.0.0.0:8080
