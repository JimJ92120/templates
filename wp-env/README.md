# wp-env

A `wp-env` environment template with:

- `blocks` plugin example (see `./plugins/custom-blocks`)
- `full site editing` theme example (FSE) (`see ./themes/full-site-editing`)
- `admin app` example (see `./plugins/admin-app`)

---

---

# installtion

### requirements

|            |     |
| ---------- | --- |
| `node`     |     |
| `docker`   |     |
| `composer` |     |

Note: `php` isn't required in the environment as running it through `docker.`
`composer` may be installed globally to ease development (else see: [Using composer, phpunit, and wp-cli tools](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#using-composer-phpunit-and-wp-cli-tools))

### run

See commands to `start` and `stop` the environment.

Default credentials to `/wp-admin` are:

```sh
USERNAME = "admin"
PASSWORD = "password"
```

#### commands

```sh
# start start env and containers
npm run wp-env start

# stop stop related containers
npm run wp-env stop

# clean: clean all docker containers related to wp-env
npm run wp-env clean
```

#### nix-shell

Start `docker` with:

```sh
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock
dockerd-rootless & npm run wp-env start
```

---

---

# directories

Following directories are mapped into the project:

- `wp-content/plugins`: `./plugins`
- `wp-content/mu-plugins`: `./mu-plugins`
- `wp-content/themes`: `./themes`

See `wp-env` documentation to map other directories and add plugins and themes to the environment:

- https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#add-mu-plugins-and-other-mapped-directories
- https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#a-complete-testing-environment

---

---

# documentation and links

### env

- [`docker in nix-shell`](https://discourse.nixos.org/t/is-there-a-way-to-run-docker-inside-a-nix-shell/46824/3)
- [`wp json schemas`](https://developer.wordpress.org/news/2024/07/json-schema-in-wordpress/)
- [`@wordpress/env documentation`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/)
- [`@wordpress/env tutorials`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/)

### wp

- [`full site editing documentation`](https://fullsiteediting.com/)
- [`plugins documentation`](https://developer.wordpress.org/plugins/)
- [`themes documentation`](https://developer.wordpress.org/themes/getting-started/)
- [`create blocks documentation`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
- [`react app in WP`](https://developer.wordpress.org/block-editor/how-to-guides/data-basics/)
