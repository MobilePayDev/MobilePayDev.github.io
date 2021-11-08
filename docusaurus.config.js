const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MobilePay Developer",
  tagline: "MobilePay Developer",
  url: "https://mobilepaydev.github.io",
  baseUrl: "/MobilePay-Payments-API/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MobilePayDev",
  projectName: "MobilePay-Payments-API",
  trailingSlash: false,
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-206187508-1",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: "Developer",
      logo: {
        alt: "MobilePay",
        src: "img/logo-blue.svg",
        srcDark: "img/logo-white.svg",
        href: "/MobilePay-Payments-API/docs/introduction",
      },
      items: [        
        {
          href: "https://sandbox-developer.mobilepay.dk/",
          label: "Sandbox Developer Portal",
          position: "right",
        },
        {
          href: "https://developer.mobilepay.dk/",
          label: "Developer Portal",
          position: "right",
        },
        {
          href: "https://github.com/MobilePayDev/MobilePay-Payments-API",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} MobilePay. Built with Docusaurus.`,
    },
    prism: {
      theme: darkCodeTheme,
      additionalLanguages: ["java", "kotlin", "swift"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}
