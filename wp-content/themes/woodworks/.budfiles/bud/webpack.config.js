module.exports = {
  "entry": {
    "app": {
      "import": [
        "@roots/bud-client/lib/hmr/index.cjs?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr",
        "@roots/bud-client/lib/proxy-click-interceptor.cjs",
        "react-refresh/runtime",
        "@scripts/app",
        "@styles/app",
        "views/patterns/00-base/animations.scss",
        "views/patterns/00-base/base.scss",
        "views/patterns/00-base/breakpoint-tests.scss",
        "views/patterns/00-base/colors.scss",
        "views/patterns/00-base/display.scss",
        "views/patterns/00-base/helpers.scss",
        "views/patterns/00-base/layout.scss",
        "views/patterns/00-base/spacing.scss",
        "views/patterns/05-pages/_pages.scss",
        "views/patterns/01-atoms/buttons/_buttons.scss",
        "views/patterns/01-atoms/forms/_forms.scss",
        "views/patterns/01-atoms/tables/_tables.scss",
        "views/patterns/01-atoms/links/_links.scss",
        "views/patterns/03-organisms/content/_content.scss",
        "views/patterns/02-molecules/blocks/_blocks.scss",
        "views/patterns/02-molecules/cards/_cards.scss",
        "views/patterns/01-atoms/images/icons/_icons.scss",
        "views/patterns/01-atoms/images/image/_image.scss",
        "views/patterns/01-atoms/images/logos/_logos.scss",
        "views/patterns/01-atoms/text/blockquote/_blockquote.scss",
        "views/patterns/01-atoms/text/caption/_caption.scss",
        "views/patterns/01-atoms/text/dek/_dek.scss",
        "views/patterns/01-atoms/text/heading/_heading.scss",
        "views/patterns/01-atoms/text/kicker/_kicker.scss",
        "views/patterns/01-atoms/text/meta/_meta.scss",
        "views/patterns/01-atoms/text/rich-text/_rich-text.scss",
        "views/patterns/01-atoms/text/small/_small.scss",
        "views/patterns/01-atoms/text/tag/_tag.scss",
        "views/patterns/03-organisms/global/footer/_footer.scss",
        "views/patterns/03-organisms/global/header/_header.scss",
        "views/patterns/03-organisms/sections/feeds/_feeds.scss",
        "views/patterns/03-organisms/sections/headers/_headers.scss",
        "views/patterns/03-organisms/sections/heroes/_heroes.scss",
        "views/patterns/03-organisms/sections/modal/_modal.scss",
        "views/patterns/03-organisms/sections/promos/_promos.scss",
        "views/patterns/03-organisms/sections/section/_section.scss",
        "views/patterns/02-molecules/components/contact/_contact.scss",
        "views/patterns/02-molecules/components/gallery/_gallery.scss",
        "views/patterns/02-molecules/navigation/footer/_footer-nav.scss",
        "views/patterns/02-molecules/navigation/pagination/_pagination.scss",
        "views/patterns/02-molecules/navigation/primary/_primary-nav.scss"
      ]
    },
    "editor": {
      "import": [
        "@roots/bud-client/lib/hmr/index.cjs?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr",
        "@roots/bud-client/lib/proxy-click-interceptor.cjs",
        "react-refresh/runtime",
        "@scripts/editor",
        "@styles/editor"
      ]
    }
  },
  "bail": false,
  "cache": {
    "name": "bud.development",
    "type": "filesystem",
    "version": "1piivamm_xqgtaufcufxq_mnbdq_",
    "cacheDirectory": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.budfiles/cache/webpack",
    "managedPaths": [
      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/package.json",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.editorconfig",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.eslintrc.js",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.nvmrc",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.prettierrc.js",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.stylelintrc",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/bud.config.mjs",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/composer.json",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/jsconfig.json",
        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/theme.json"
      ]
    }
  },
  "context": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks",
  "devtool": "cheap-module-source-map",
  "experiments": {
    "buildHttp": {
      "allowedUris": [
        "https://gist.githubusercontent.com/",
        "https://raw.githubusercontent.com/",
        "https://unpkg.com/",
        "https://cdn.skypack.dev/"
      ],
      "cacheLocation": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.budfiles/bud/modules",
      "frozen": false,
      "lockfileLocation": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.budfiles/bud/bud.lock",
      "upgrade": true
    }
  },
  "externalsType": "var",
  "infrastructureLogging": {
    "level": "none"
  },
  "mode": "development",
  "module": {
    "rules": [
      {
        "test": {},
        "exclude": [
          {}
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
            ],
            "use": [
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "modules": false,
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "sourceMap": true,
                  "postcssOptions": {
                    "syntax": "postcss-scss",
                    "plugins": [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-import/index.js",
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-nested/index.js",
                      [
                        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  }
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
            ],
            "use": [
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "esModule": true,
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "sourceMap": true,
                  "postcssOptions": {
                    "syntax": "postcss-scss",
                    "plugins": [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-import/index.js",
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-nested/index.js",
                      [
                        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  }
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks"
            ],
            "exclude": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/csv-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks"
            ],
            "exclude": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/html-loader/dist/cjs.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
            ],
            "use": [
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/babel-loader/lib/index.js",
                "options": {
                  "cacheDirectory": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.budfiles/cache/babel",
                  "presets": [
                    [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/@babel/preset-env/lib/index.js"
                    ],
                    [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/@babel/preset-react/lib/index.js"
                    ]
                  ],
                  "plugins": [
                    [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/@babel/plugin-transform-runtime/lib/index.js",
                      {
                        "helpers": false
                      }
                    ],
                    [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                    ],
                    [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
                    ],
                    [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                    ],
                    [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/react-refresh/babel.js"
                    ]
                  ],
                  "env": {
                    "development": {
                      "compact": false
                    }
                  },
                  "root": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks"
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks"
            ],
            "exclude": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks"
            ],
            "exclude": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks"
            ],
            "exclude": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/xml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks"
            ],
            "exclude": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/yml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
            ],
            "use": [
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "modules": false,
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "sourceMap": true,
                  "postcssOptions": {
                    "syntax": "postcss-scss",
                    "plugins": [
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-import/index.js",
                      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-nested/index.js",
                      [
                        "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  }
                }
              },
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/resolve-url-loader/index.js",
                "options": {
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/sass-loader/dist/cjs.js",
                "options": {
                  "implementation": {
                    "sassNull": {},
                    "sassTrue": {
                      "value": true
                    },
                    "sassFalse": {
                      "value": false
                    },
                    "Logger": {
                      "silent": {}
                    },
                    "info": "dart-sass\t1.54.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.17.6\t(Dart Compiler)\t[Dart]",
                    "types": {},
                    "NULL": {},
                    "TRUE": {
                      "value": true
                    },
                    "FALSE": {
                      "value": false
                    }
                  },
                  "sourceMap": true,
                  "additionalData": "@import \"@styles/_variables\";\n@import \"@styles/_breakpoints\";\n@import \"@styles/_mixins\";\n@import \"@styles/_grid\";\n@import \"@styles/_overrides\";"
                }
              }
            ]
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name][ext]",
    "chunkFilename": "js/dynamic/[id].js",
    "filename": "js/[name].js",
    "path": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/public",
    "publicPath": "/"
  },
  "optimization": {
    "emitOnErrors": true,
    "minimize": false,
    "minimizer": [
      "..."
    ]
  },
  "parallelism": 110,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "target": "browserslist:/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/package.json",
  "plugins": [
    {
      "options": {}
    },
    {
      "patterns": [
        {
          "from": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources/images",
          "to": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/public/images/[path][name][ext]",
          "context": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources",
          "noErrorOnMissing": true,
          "toType": "template"
        }
      ],
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    },
    {
      "key": "ESLintWebpackPlugin",
      "options": {
        "extensions": [
          "js",
          "jsx",
          "ts",
          "tsx",
          "vue"
        ],
        "emitError": true,
        "emitWarning": true,
        "failOnError": true,
        "resourceQueryExclude": [],
        "cacheLocation": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/.budfiles/cache/eslint",
        "cwd": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks",
        "resolvePluginsRelativeTo": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks",
        "threads": false,
        "eslintPath": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/node_modules/eslint/lib/api.js"
      }
    },
    {
      "key": "StylelintWebpackPlugin",
      "options": {
        "extensions": [
          "css",
          "scss",
          "sass"
        ],
        "emitError": true,
        "emitWarning": true,
        "failOnError": true,
        "context": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources"
      },
      "startTime": 1682639953083,
      "prevTimestamps": {}
    },
    {
      "options": {
        "emitHtml": false,
        "publicPath": ""
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    },
    {
      "options": {
        "overlay": false,
        "exclude": {},
        "include": {}
      }
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    }
  ],
  "resolve": {
    "alias": {
      "@src": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources",
      "@dist": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/public",
      "@fonts": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources/fonts",
      "@images": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources/images",
      "@scripts": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources/scripts",
      "@styles": "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources/styles"
    },
    "extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".wasm",
      ".yml",
      ".toml",
      ".scss",
      ".sass"
    ],
    "modules": [
      "/Users/kelseycahill/Sites/Woodworks Construction/wp-content/themes/woodworks/resources",
      "node_modules"
    ]
  }
}