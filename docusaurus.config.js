const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const lightCodeTheme = require("prism-react-renderer/themes/github")

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MobilePay Developer",
  tagline: "MobilePay Developer",
  url: "https://developer.mobilepay.dk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MobilePayDev",
  projectName: "MobilePayDev.github.io",
  trailingSlash: false,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Developer",
      logo: {
        alt: "MobilePay",
        src: "img/logo-blue.svg",
        srcDark: "img/logo-white.svg",
        href: "/",
      },
      items: [   
        {
          label: 'App Payments Facade',
          position: 'left',
          to: '/docs/app-payments/',
        },
        {
          label: 'Subscriptions Facade',
          position: 'left',
          to: '/docs/subscriptions',
        },
        {
          label: 'API references',
          position: 'left',
          items: [
            {
              label: 'App payments Facade',
              to: '/api/app-payments',
            },
            {
              label: 'Subscriptions Facade',
              to: '/api/subscriptions',
            },
          ],
        },
        {
          href: "https://developer.vippsmobilepay.com/",
          label: "Vipps MobilePay Documentation",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} MobilePay. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["java", "kotlin", "swift", "scala"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: "UA-206187508-1",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'payments-api-yaml',
            spec: "openapi/app_payments_api.yaml",
            route: "/api/app-payments",
          },
          {
            id: 'webhooks-api-yaml',
            spec: "openapi/webhooks.yaml",
            route: "/api/wehooks",
          },
          {
            id: 'reporting-api-yaml',
            spec: "openapi/reporting.yaml",
            route: "/api/reporting",
          },
          {
            id: 'subscriptions-api-yaml',
            spec: "openapi/subscriptions.yaml",
            route: "/api/subscriptions",
          },
          {
            id: 'invoice-api-yaml',
            spec: "openapi/invoice.yaml",
            route: "/api/invoice",
          },
          {
            id: 'pos-api-yaml',
            spec: "openapi/pos.yaml",
            route: "/api/pos",
          },
          {
            id: 'online-api-yaml',
            spec: "openapi/online.yaml",
            route: "/api/online",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#7b93ff",
          options: {
            disableSearch: true,
            hideDownloadButton: true,
            requiredPropsFirst: true
          },
        },
      },
    ],
  ],
}
