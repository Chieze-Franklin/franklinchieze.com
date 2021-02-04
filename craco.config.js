const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#001D4A',
              '@link-color': '#0364FF',
              '@border-color-base': '#0364FF',
              '@body-background': '#FBFBFB',
              '@font-size-base': '16px',
              '@border-radius-base': '5px',
              '@font-family': 'Inter',
              '@text-color-secondary': '#5C5A5A',
              '@btn-primary-bg': '#0364FF'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
