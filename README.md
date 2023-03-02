## Overview

This is the "official" starter kit for all Southleft generated WordPress projects going forward. Please follow the below instructions to get your site setup. Feel free to clone this repo and contribute to it (via a pull request) for continuous improvement! 🙌🏼

## Requirements
- [Lando](https://docs.lando.dev/basics/installation.html#macos)
- [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
- [PHP](https://secure.php.net/manual/en/install.php) >= 7.4.0
- [Node.js](http://nodejs.org/) >= 16
- [Yarn](https://yarnpkg.com/en/docs/install)

## Foundations

This start kit is built upon the following frameworks:

- [Sage](https://roots.io/sage/)
- [Timber](https://timber.github.io/docs/getting-started/setup/)

## Lando/Docker Environment Installation

### Create folder and enter it
```sh
mkdir your-site && cd your-site
```

_Remember to replace all instances of "your-site" with the site and theme name._


### Initialize a "wordpress" recipe using the latest WordPress version
```sh
lando init \
  --source remote \
  --remote-url https://wordpress.org/latest.tar.gz \
  --recipe wordpress \
  --webroot . \
  --name your-site
```

### Move files to current directory and delete the "wordpress" and "wp-content" directories
```sh
mv ./wordpress/* ./; rm -r wp-content; rm -r wordpress
```

### Start it up
```sh
lando start
```

### Create a WordPress config file
```sh
lando wp config create \
  --dbname=wordpress \
  --dbuser=wordpress \
  --dbpass=wordpress \
  --dbhost=database \
  --path=.
```

### Install WordPress
```sh
lando wp core install \
  --url=https://your-site.lndo.site/ \
  --title="Your Site Title" \
  --admin_user=admin \
  --admin_password=password \
  --admin_email=admin@your-site.lndo.site \
  --path=.
```

### Pull the contents of this repo into your directory
```sh
git init && git remote add origin git@github.com:southleft/wordpress-starter-kit.git && git pull origin master
```

### Change git remote origin URL to site repo
```sh
git remote set-url origin git@github.com:southleft/your-site.git
```

Confirm the `origin` remote is pointing at `your-sites`'s repo:

```sh
git remote -v
```

### List information about this app (not necessary for installation)
```sh
lando info
```

## Theme Setup

Edit `app/setup.php` to enable or disable theme features, setup navigation menus, post thumbnail sizes, and sidebars.

### Theme development
- Rename the `your-site` theme directory to the new site name
- `cd wp-content/themes/your-site/`
- `composer install && yarn && yarn build`
- Update `bud.config.js` with your local Lando dev URL

### Build commands
- `yarn dev` — Compile assets when file changes are made, start Browsersync session
- `yarn build` — Compile assets for production

### WordPress admin access
- https://your-site.lndo.site/wp-admin
- user: admin
- pass: password

### Update and activate plugins

1. Update the `style.css` file to "Your Site"'s settings (feel free to update the `screenshot.png` too)
1. Navigate to https://your-site.lndo.site/wp-admin/themes.php and update the theme to the `your-site` theme.
1. Navigate to https://your-site.lndo.site/wp-admin/update-core.php and update any plugins that need updating.


This starter kit comes packed with the following plugins:
- [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/)
  - License key: `b3JkZXJfaWQ9Nzg3Mjl8dHlwZT1kZXZlbG9wZXJ8ZGF0ZT0yMDE2LTA0LTAyIDEzOjMxOjU2`
- [WP Migrate Pro](https://deliciousbrains.com/wp-migrate-db-pro/)
  - License key: `374c5dad-ea97-4c52-aaa8-04ed078edb3c`
- [Perfmatters](https://perfmatters.io/)
  - License key: `db50f2508280488f652458af5d7c1502`
- [Yoast SEO](https://yoast.com/wordpress/plugins/seo/)
- [Classic Editor](https://wordpress.org/plugins/classic-editor/)
- [Redirection](https://redirection.me/)
- [Wordfence](https://www.wordfence.com/)
