if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
require("dotenv").config();
const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: 'Design ITVGROUP',
    siteUrl: 'https://www.itv.ru',
    description: `ITVGROUP Design materials, ITVGROUP identity guide`,
    image: "/images/favicon.png",
    author: [`@ITVGROUP`, '@Design_Dep', '@'],
    languages
  },
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {

      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ITVGROUP. Design Materials`,
        short_name: `ITVGROUP Ltd.`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
        background_color: `#ffffff`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    },
  ],
};
