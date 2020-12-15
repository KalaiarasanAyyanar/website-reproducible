module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#35488a`,
        theme_color: `#35488a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-PNCV6QJ`,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        //color: `blue`,
        // Disable the loading spinner.
        showSpinner: true
      }
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/sitemap.xml`,
    //     // Exclude specific pages or groups of pages using glob parameters
    //     // See: https://github.com/isaacs/minimatch
    //     // The example below will exclude the single `path/to/page` and all routes beginning with `category`
    //     exclude: [`/withdrawn-products/*`],
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           siteUrl
    //         }
    //       }

    //       allSitePage {
    //         edges {
    //           node {
    //             path
    //           }
    //         }
    //       }
    //   }`
    //   }
    // },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: process.env.BASE_URL,
        sitemap: `http://localhost:8000/sitemap.xml`,
        policy: [{ userAgent: `*`, disallow: `/` }]
      },
      output: `/robots.txt`
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto`,`Roboto Slab`]
        }
      }
    },
    // `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        runtimeCaching: [
          {
            // Use networkFirst since these shouldn't be cached
            urlPattern: /^[^.]*(\.html)?$/,
            handler: `networkFirst`
          },
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`
          }
        ]
      }
    }
    // {
    //   resolve:`gatsby-plugin-typography`,
    //   options:{
    //     pathToConfigModule:`src/util/typography`,
    //   }
    // }
  ],
}
