// @ts-check

/**
 * Build configuration
 *
 * @see {@link https://bud.js.org/guides/getting-started/configure}
 * @param {import('@roots/bud').Bud} app
 */
export default async (app) => {
  app
    /**
     * Application entrypoints with globbing
     */
    .entry({
      app: ["@scripts/app", "@styles/app", "views/patterns/**/*.{css,scss}"],
      editor: ["@scripts/editor", "@styles/editor"],
    })

    /**
     * Directory contents to be included in the compilation
     */
    .assets(["images", "fonts"])

    /**
     * Matched files trigger a page reload when modified
     */
    .watch(["resources/**/*", "app/**/*"])

    /**
     * Proxy origin (`WP_HOME`)
     */
    .proxy("http://woodworks.local.host/")

    /**
     * Development origin
     */
    .serve("http://localhost:56174")

    /**
     * URI of the `public` directory
     */
    .setPublicPath("/wp-content/themes/woodworks/");

  app.sass.importGlobal([
    '@styles/_variables',
    '@styles/_breakpoints',
    '@styles/_mixins',
    '@styles/_grid',
    '@styles/_overrides',
  ])
};
