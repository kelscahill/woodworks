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
    .assets(["images"])

    /**
     * Matched files trigger a page reload when modified
     */
    .watch(["resources/**/*", "app/**/*"])

    /**
     * Proxy origin (`WP_HOME`)
     */
    .proxy("http://your-site.lndo.site/")

    /**
     * Development origin
     */
    .serve("http://0.0.0.0:3005")

    /**
     * URI of the `public` directory
     */
    .setPublicPath("/app/themes/your-site/public/");

  app.sass.importGlobal([
    '@styles/_variables',
    '@styles/_breakpoints',
    '@styles/_mixins',
    '@styles/_grid',
  ])
};
