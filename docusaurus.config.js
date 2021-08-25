const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MobilePay Developer',
  tagline: 'MobilePay Developer',
  url: 'https://mobilepaydev.github.io',
  baseUrl: '/MobilePay-Payments-API/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MobilePayDev',
  projectName: 'MobilePay-Payments-API',
  trailingSlash: false,
  themeConfig: {
    announcementBar: {
      id: 'wip', // Any value that will identify this message.
      content:
        'It is a draft version of docs for Payments API, Paymentpoints API, Refunds API & Webhooks API. It will receive constant updates until October 1st.',
      backgroundColor: '#5a78ff', // Defaults to `#fff`.
      textColor: '#fff', // Defaults to `#000`.
      isCloseable: true // Defaults to `true`.
    },
    navbar: {
      title: 'Developer',
      logo: {
        alt: 'MobilePay',
        src: 'img/logo-blue.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs'
        },
        {
          href: 'https://sandbox-developer.mobilepay.dk/',
          label: 'Sandbox Developer Portal',
          position: 'right'
        },
        {
          href: 'https://developer.mobilepay.dk/',
          label: 'Developer Portal',
          position: 'right'
        },
        {
          href: 'https://github.com/MobilePayDev/MobilePay-Payments-API',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} MobilePay. Built with Docusaurus.`
    },
    prism: {
      theme: darkCodeTheme,
      additionalLanguages: ['java', 'kotlin', 'swift']
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/MobilePayDev/MobilePay-Payments-API/tree/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
