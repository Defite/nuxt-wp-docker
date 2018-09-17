# nuxt-wp-docker
Docker container for Wordpress (REST API) and Nuxt.js

![Main page](https://user-images.githubusercontent.com/299118/45650683-bc9de700-bad7-11e8-9cb4-95c88a3cbfe8.png)

## Install

1) clone this repo
2) cd to folder with repo
3) chmod +x ./wordpress/cmd.sh
4) docker-compose --build -d
5) open `localhost:5000/wp-admin/` and install wordpress
6) open `localhost:5000/wp-admin/options-permalink.php` and update permalink to human readable like `/posts/%postname%`
7) make two new pages with slug `main` and `blog`
8) open localhost:5000

![Blog](https://user-images.githubusercontent.com/299118/45650746-f66eed80-bad7-11e8-8506-2b480f1fc11b.png)

## Development

You can debug your Nuxt app with famous [vue-devtools](https://github.com/vuejs/vue-devtools). It's all ready.

![vue-devtools](https://user-images.githubusercontent.com/299118/45650892-654c4680-bad8-11e8-9958-68691f59d8c6.png)

## Production

To build production version of Nuxt open `docker-composer.yml`, find `nuxt` section and in `command` change to `npm run start` like this:

```
nuxt:
    build: ./nuxt
    depends_on:
      - wp
      - db
    networks:
      - flat-network
    restart: always
    command:
      "npm run start"
```
