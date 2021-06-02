const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // config less variable here
            modifyVars: {
              '@primary-color': '#00a484',
              '@link-color': '#0fcd8c',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
