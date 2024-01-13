#!/usr/bin/env bash

# go to root of project
cd $(git rev-parse --show-toplevel)

# Start lando
lando start && \
sleep 2s

# initialize a db - this adds config to your wp-config.php file
lando wp config create \
  --dbname=wordpress \
  --dbuser=wordpress \
  --dbpass=wordpress \
  --dbhost=database \
  --path=.

# install a bare multisite environment
lando wp core install \
  --url=https://creolecuisine-marketing.lndo.site/ \
  --title="Creole Cuisine Marketing" \
  --base=/ \
  --admin_user=admin \
  --admin_password=password \
  --admin_email=admin@creolecuisine-marketing.lndo.site \
  --path=.

cd wp-content/themes/creolecuisine-marketing
nvm install v16.16.0
nvm use v16.16.0
yarn setup